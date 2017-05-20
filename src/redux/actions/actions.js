import axios from 'axios';
import config from './config';

export const FEEDS_REQUESTED = 'FEEDS_REQUESTED';
export const FEEDS_RECEIVED = 'FEEDS_RECEIVED';
export const FEED_RECEIVED = 'FEED_RECEIVED';
export const FEED_REQUESTED = 'FEED_REQUESTED';
export const COMMENT_SENT = 'COMMENT_SENT';
export const COMMENT_SUBMITTED_SUCCESSFULLY = 'COMMENT_SUBMITTED_SUCCESSFULLY';
export const COMMENT_DELETION_STARTED = 'COMMENT_DELETION_STARTED';
export const COMMENT_DELETED_SUCCESSFULLY = 'COMMENT_DELETED_SUCCESSFULLY';

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

// Submitting comments

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

        // TODO Handle the failure
        axios.post(feed_url, data).then((response) => {
            dispatch(commentSubmittedSuccessfully(response.data))
        });

    }
}

// Deleting comments

export function commentDeletionStarted() {
    return {
        type: COMMENT_DELETION_STARTED,
        deleting_comment: true
    }
}

export function commentDeletedSuccessfully(comments) {
    return {
        type: COMMENT_DELETED_SUCCESSFULLY,
        deleting_comment: false,
        comments: comments
    }
}

export function deleteComment(feedId, commentId) {

    return function(dispatch) {

        let feed_url = config.feed_service_url + '/' + feedId + '/comments/' + commentId;

        // TODO Handle the failure
        axios.delete(feed_url).then((response) => {
            dispatch(commentDeletedSuccessfully(response.data));
        });

    }

}