import _ from 'lodash';
import initState from '../state';

const feeds = (state = initState, action) => {

    switch(action.type) {

        case 'FEEDS_REQUESTED':
            return Object.assign({}, state, {
                loading_feeds: action.loading_feeds
            });

        case 'FEEDS_RECEIVED':
            return Object.assign({}, state, {
                feeds: action.feeds,
                loading_feeds: action.loading_feeds
            });

        case 'FEED_REQUESTED':
            return Object.assign({}, state, {
                loading_feed_detail: action.loading_feed_detail
            });

        case 'FEED_RECEIVED':
            return Object.assign({}, state, {
                loading_feed_detail: action.loading_feed_detail,
                selected_feed: action.selected_feed
            });

        case 'TOGGLE_DIALOG':
            return Object.assign({}, state, {
                delete_dialog_open: action.delete_dialog_open,
                dialog_data: action.dialog_data
            });

        case 'COMMENT_DELETION_STARTED':
            return Object.assign({}, state, {
                deleting_comment: true,
            });

        case 'COMMENT_DELETED_SUCCESSFULLY':

            let state_modification = Object.assign({}, state, {
                delete_dialog_open: action.delete_dialog_open,
                deleting_comment: false,
            });

            let modify_selected_feed_comments = Object.assign({}, state.selected_feed, {
                comments: _.filter(state.selected_feed.comments, (comment) => {
                    return comment._id !== action.comment_id_to_delete;
                })
            });

            return Object.assign({}, state, {
                ...state_modification,
                selected_feed: modify_selected_feed_comments
            });

        case 'COMMENT_SUBMITTED_SUCCESSFULLY':

            let state_modification_1 =  Object.assign({}, state, {
                delete_dialog_open: action.delete_dialog_open
            });

            let modify_selected_feed_comments_1 = Object.assign({}, state.selected_feed, {
                comments: action.comments
            });

            return Object.assign({}, state, {
                ...state_modification_1,
                selected_feed: modify_selected_feed_comments_1
            });

        case 'TOGGLE_SNACKBAR':
            return Object.assign({}, state, {
                display_snackbar: action.display_snackbar,
                snackbar_message: action.snackbar_message
            });
        default:
            return state;
    }

}

export default feeds