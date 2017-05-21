import React from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import {Card, CardText} from 'material-ui/Card';
import FeedDetailHeader from './FeedDetailHeader';
import Comment from '../Comments/Comment';
import CommentForm from '../Comments/CommentForm';
import CommentList from '../Comments/CommentList';

const mapStateToProps = (state) => {
    return {
        comments: state.selected_feed.comments,
    }
};

@connect(mapStateToProps)
class FeedDetail extends React.Component {

    render() {

        const { selected_feed, comments } = this.props;

        console.log(comments)

        let commentList = null;

        if (comments.length > 0 && comments !== undefined) {
            commentList = <CommentList comments={comments}></CommentList>
        } else {
            commentList = <Comment comment={null}></Comment>
        }

        return (
        <Card className="mt-40">
            <FeedDetailHeader feed={selected_feed}></FeedDetailHeader>
            <Divider/>
            <CardText>
                <CommentForm></CommentForm>
            </CardText>
            <Divider/>
            {commentList}
        </Card>
        );

    }

}

export default FeedDetail;