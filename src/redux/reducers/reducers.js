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
        case 'FEED_RECEIVED':
            return Object.assign({}, state, {
                selected_feed: action.selected_feed
            });
        case 'TOGGLE_DIALOG':
            return Object.assign({}, state, {
                delete_dialog_open: action.delete_dialog_open
            });
        case 'COMMENT_DELETED_SUCCESSFULLY':
            return Object.assign({}, state, {
                delete_dialog_open: action.delete_dialog_open,
                comments: action.comments
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