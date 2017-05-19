import React from 'react';
import { connect } from 'react-redux';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const mapStateToProps = (state, ownProps) => {
    return {
        feeds: state.feeds
    }
};

@connect(mapStateToProps)
class Comment extends React.Component {

    render() {
        return <ListItem
                    leftAvatar={<Avatar src="http://lorempixel.com/g/512/512/" />}
                    primaryText="Comment header ..."
                    secondaryText={
                        <p>
                            <strong>Brendan Lim</strong> --
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>
                    }
                    secondaryTextLines={2}
                />
    }

}

export default Comment;