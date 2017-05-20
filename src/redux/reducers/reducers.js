import initState from '../state';

const feeds = (state = initState, action) => {

    switch(action.type) {

        case 'FEED_SELECT':
            return Object.assign({}, state, {
                selected_feed_id: action.selected_feed_id
            });

        case 'FEEDS_REQUESTED':
            return Object.assign({}, state, {
                loading_feeds: action.loading_feeds
            });

        case 'FEEDS_RECEIVED':
            return Object.assign({}, state, {
                feeds: action.feeds,
                loading_feeds: action.loading_feeds
            });
        default:
            return state;
    }

}

export default feeds