import axios from 'axios';
import config from './config';

export const FEEDS_REQUESTED = 'FEEDS_REQUESTED';
export const FEEDS_RECEIVED = 'FEEDS_RECEIVED';
export const FEED_RECEIVED = 'FEED_RECEIVED';
export const FEED_REQUESTED = 'FEED_REQUESTED';
export const COMMENT_SENT = 'COMMENT_SENT';
export const COMMENT_SUBMITTED_SUCCESSFULLY = 'COMMENT_SUBMITTED_SUCCESSFULLY';

//----------------------------------------------------------
// Load feeds service
//----------------------------------------------------------

// Sync actions
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

// Async action retrieving feeds
export function fetchFeeds() {
    return function(dispatch) {
        let feed_url = config.feed_service_url;
        axios.get(feed_url).then((response) => {
            dispatch(feedsReceived(response.data))
        });
    }
}

//----------------------------------------------------------
// Feed detail
//----------------------------------------------------------

// Sync actions
export function feedRequested() {
    return {
        type: FEED_REQUESTED,
        loading_feed_detail: true
    }
}

export function feedReceived(feed) {
    return {
        type: FEED_RECEIVED,
        loading_feed_detail: false,
        selected_feed: feed
    }
}

// Async action
export function fetchFeed(feedId) {
    return function(dispatch) {
        let feed_url = config.feed_service_url + '/' + feedId;
        axios.get(feed_url).then((response) => {
            dispatch(feedReceived(response.data))
        });
    }
}

//----------------------------------------------------------
// Comments
//----------------------------------------------------------

export function commentSent() {
    return {
        type: COMMENT_SENT,
        comment_sending: true
    }
}

export function commentSubmittedSuccessfully(comments) {
    return {
        type: COMMENT_SUBMITTED_SUCCESSFULLY,
        comments: comments,
        comment_sending: false
    }
}

export function submitComment(feedId, data) {
    return function(dispatch) {

        let feed_url = config.feed_service_url + '/' + feedId + '/comments';

        axios.post(feed_url, data).then((response) => {
            dispatch(commentSubmittedSuccessfully(response.data))
        });
    }
}

export function deleteComment(commentId) {

}