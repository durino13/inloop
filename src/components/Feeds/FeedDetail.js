import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import Sticky from 'react-sticky-el';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import Comment from '../Comments/Comment';
import {Card, CardText} from 'material-ui/Card';
import FeedDetailHeader from './FeedDetailHeader';
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

        let commentList = null;

        if (comments.length > 0 && comments !== undefined) {
            commentList = <CommentList comments={comments}></CommentList>
        } else {
            commentList = <Comment comment={null}></Comment>
        }

        return (
            <Sticky topOffset={-30}>

                <Tabs className="mt-40">
                    <Tab label="Feed info" >
                        <div>
                            <Card className="mt-40">
                                <FeedDetailHeader feed={selected_feed}></FeedDetailHeader>
                                <Divider/>
                            </Card>
                        </div>
                    </Tab>
                    <Tab label="Comments" >
                        <div style={{overflow: 'scroll'}}>
                            <CardText>
                                <CommentForm></CommentForm>
                            </CardText>
                            <Divider/>
                            {commentList}
                        </div>
                    </Tab>
                </Tabs>

            </Sticky>
        );

    }

}

export default FeedDetail;