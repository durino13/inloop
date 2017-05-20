import React from 'react';
import { connect } from 'react-redux';
import { commentDeletionStarted, deleteComment } from '../../redux/actions/actions';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ListItem from 'material-ui/List/ListItem';
import Delete from 'material-ui/svg-icons/action/delete';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const mapStateToProps = (state) => {
    return {
        selected_feed: state.selected_feed,
    }
};

@connect(mapStateToProps)
class Comment extends React.Component {

    deleteComment = (feedId, commentId) => {

        const { dispatch } = this.props;

        dispatch(commentDeletionStarted());
        dispatch(deleteComment(feedId, commentId));
    }

    render() {

        let { comment, selected_feed } = this.props;

        let commentComponent = null;

        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="Actions"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem primaryText="Delete" leftIcon={<Delete />} onClick={() => this.deleteComment(selected_feed._id, comment._id)} ></MenuItem>
            </IconMenu>
        );

        if (comment) {
            commentComponent = <ListItem
                leftAvatar={<Avatar src={comment.person.avatar} />}
                rightIconButton={rightIconMenu}
                primaryText={comment.person.firstName + ' '+ comment.person.lastName}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{comment.person.date}</span><br />
                        {comment.text}
                    </p>
                }
                secondaryTextLines={2}
            />
        } else {
            commentComponent = <ListItem
                primaryText="No comments available ..."
                disabled={true}
            />
        }

        return <span>
            { commentComponent }
        </span>
    }

}

export default Comment;