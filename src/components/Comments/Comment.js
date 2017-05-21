import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ListItem from 'material-ui/List/ListItem';
import DeleteDialog from '../Dialogs/DeleteDialog';
import Delete from 'material-ui/svg-icons/action/delete';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { showDeleteDialog } from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        selected_feed: state.selected_feed,
    }
};

@connect(mapStateToProps)
class Comment extends React.Component {

    deleteComment = (feedId, commentId) => {
        const { dispatch } = this.props;
        dispatch(showDeleteDialog(true, { 'feedId': feedId, 'commentId': commentId}));
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
                disabled={true}
            />
        } else {
            commentComponent = <ListItem
                primaryText="No comments available ..."
                disabled={true}
            />
        }

        // TODO comment ID is nested under person ??
        return<div>
            { commentComponent }
            <DeleteDialog></DeleteDialog>
        </div>
    }

}

export default Comment;