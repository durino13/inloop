import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FeedDetailHeader from './FeedDetailHeader';

class FeedDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { feed } = this.props;

        return (
        <Card className="mt-40">
            <FeedDetailHeader feed={feed}></FeedDetailHeader>
            <Divider/>
            <CardText>
                Text
            </CardText>
        </Card>
        );

    }

}

export default FeedDetail;