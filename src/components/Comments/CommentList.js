import React from 'react';
import Comment from './Comment';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class CommentList extends React.Component {

    render() {

        let { comments } = this.props;

        return <List>
                <Subheader>{comments.length} comment(s)</Subheader>
                {
                    comments.map(function(comment, index) {
                        return <Comment className="mt-5 mb-5" key={index} comment={comment}></Comment>
                    })
                }
            </List>
    }

}

export default CommentList;