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
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const TOGGLE_SNACKBAR = 'TOGGLE_SNACKBAR';

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

    return dispatch => {

        let feed_url = config.feed_service_url;

        return axios.get(feed_url).then((response) => {
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
    return dispatch => {
        let feed_url = config.feed_service_url + '/' + feedId;
        return axios.get(feed_url).then((response) => {
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

export function commentSubmittedSuccessfully(allFeedComments) {
    return {
        type: COMMENT_SUBMITTED_SUCCESSFULLY,
        comments: allFeedComments,
        comment_sending: false
    }
}

export function submitComment(feedId, newComment) {

    return dispatch => {

        let feed_url = config.feed_service_url + '/' + feedId + '/comments';

        return axios.post(feed_url, newComment).then((response) => {
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

export function commentDeletedSuccessfully(commentId) {
    return {
        type: COMMENT_DELETED_SUCCESSFULLY,
        deleting_comment: false,
        comment_id_to_delete: commentId
    }
}

export function deleteComment(feedId, commentId) {

    return dispatch => {

        let feed_url = config.feed_service_url + '/' + feedId + '/comments/' + commentId;

        return axios.delete(feed_url).then((response) => {
            dispatch(commentDeletedSuccessfully(commentId));
        });

    }

}

//----------------------------------------------------------
// Dialogs
//----------------------------------------------------------

export function showDeleteDialog(isVisible, data = null) {
    return {
        type: TOGGLE_DIALOG,
        delete_dialog_open: isVisible,
        dialog_data: {
            data: data
        }
    }
}

//----------------------------------------------------------
// Snackbars
//----------------------------------------------------------

export function toggleSnackbar(isVisible, message = '') {
    return {
        type: TOGGLE_SNACKBAR,
        display_snackbar: isVisible,
        snackbar_message: message
    }
}