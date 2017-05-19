import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const mapStateToProps = (state, ownProps) => {
    // return {
    //     comments: state.comments
    // }
};

@connect(mapStateToProps)
class CommentList extends React.Component {

    render() {
        return <List>
                <Subheader>Comments</Subheader>
                <Comment></Comment>
            </List>
    }

}

export default CommentList;