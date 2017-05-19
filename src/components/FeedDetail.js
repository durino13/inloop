import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FeedDetailHeader from './FeedDetailHeader';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class FeedDetail extends React.Component {

    render() {

        const { feed } = this.props;

        return (
        <Card className="mt-40">
            <FeedDetailHeader feed={feed}></FeedDetailHeader>
            <Divider/>
            <CardText>
                <CommentForm></CommentForm>
            </CardText>
            <Divider/>
            <CommentList></CommentList>
        </Card>
        );

    }

}

export default FeedDetail;