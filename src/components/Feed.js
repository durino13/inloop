import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { feedRequested, fetchFeed }  from '../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        selectedFeed: state.selected_feed ? state.selected_feed : ''
    }
};

@connect(mapStateToProps)
class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.feed = props.feed;
    }

    getCardClass = () => {
        const { selectedFeed } = this.props;
        if (selectedFeed) {
            return selectedFeed === this.feed._id ? "mt-40 active-feed" : "mt-40";
        } else {
            return "mt-40";
        }
    }

    onFeedSelect = (feed) => {
        const { dispatch } = this.props;
        dispatch(feedRequested());
        dispatch(fetchFeed(feed._id));
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