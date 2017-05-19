import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import store from '../index';

class Feed extends React.Component {

    constructor(props) {
        super(props);

    }

    onFeedSelect(feed) {
        store.dispatch({ type: 'FEED_SELECT', selected_feed: feed.id })
    }

    render() {

        const { feed } = this.props;

        return (
            <Card className="mt-40">
                <CardHeader
                    title={feed.person.firstName+" "+feed.person.lastName}
                    subtitle={feed.date}
                    avatar={feed.person.avatar}
                >
                    <FlatButton onClick={() => this.onFeedSelect(feed)} label="Detail" primary={true} />
                </CardHeader>
                <CardText>
                    {feed.text}
                </CardText>
            </Card>
        );
    }

}

export default Feed;