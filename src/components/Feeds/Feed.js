import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { feedRequested, fetchFeed }  from '../../redux/actions/actions';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';

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
            return selectedFeed._id === this.feed._id ? "mt-40 active-feed" : "mt-40";
        } else {
            return "mt-40";
        }
    }

    convertDate() {
        const { selectedFeed } = this.props;
        return moment(selectedFeed.date).format("dddd, MMMM Do YYYY, h:mm a");
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
                    subtitle={this.convertDate()}
                    avatar={feed.person.avatar}
                >
                    <FlatButton
                        onClick={() => this.onFeedSelect(feed)}
                        label="Detail"
                        primary={true}
                        className="visible-md visible-lg"
                    />
                </CardHeader>
                <CardText>
                    {feed.text}
                </CardText>
                <CardActions>
                    <FlatButton onClick={() => this.onFeedSelect(feed)}
                                label="Detail"
                                primary={true}
                                className="visible-sm visible-xs"
                    />
                </CardActions>
            </Card>
        );
    }

}

export default Feed;