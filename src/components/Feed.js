import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import store from '../index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        selectedFeed: state.selected_feed_id ? state.selected_feed_id : ''
    }
};

@connect(mapStateToProps)
class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.feed = props.feed;
    }

    getCardClass() {
        const { selectedFeed } = this.props;
        if (selectedFeed) {
            return selectedFeed === this.feed.id ? "mt-40 active-feed" : "mt-40";
        } else {
            return "mt-40";
        }
    }

    onFeedSelect(feed) {
        store.dispatch({ type: 'FEED_SELECT',   selected_feed_id: feed.id })
    }

    render() {

        const { feed } = this.props;

        return (
            <Card className={this.getCardClass()}>
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