import axios from 'axios';
import config from './config';

export const FEEDS_REQUESTED = 'FEEDS_REQUESTED'
export const FEEDS_RECEIVED = 'FEEDS_RECEIVED'

//----------------------------------------------------------
// Synchronious stuff
//----------------------------------------------------------

export function feedsRequested() {
    return {
        type: FEEDS_REQUESTED,
        loading_feeds: true
    }
}

export function feedsReceived(feeds) {
    return {
        type: FEEDS_RECEIVED,
        feeds: feeds,
        loading_feeds: false,
        receivedAt: Date.now()
    }
}

//----------------------------------------------------------
// Async requests
//----------------------------------------------------------

export function fetchFeeds() {
    return function(dispatch, getState) {
        var feed_url = config.feed_service_url;
        axios.get(feed_url).then((response) => {
            dispatch(feedsReceived(response.data))
        });
    }
}