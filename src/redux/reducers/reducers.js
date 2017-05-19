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
            console.log(action)
            return Object.assign({}, state, {
                feeds: action.feeds,
                loading_feeds: action.loading_feeds
            });
    }

    return state;
}

export default feeds