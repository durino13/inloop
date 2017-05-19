import initState from '../state';

const feeds = (state = initState, action) => {
    switch(action.type) {
        case 'FEED_SELECT':
            console.log(action)
            console.log(state)
            return Object.assign({}, state, {
                selected_feed: action.selected_feed
            })
        }
    return state;
}

export default feeds
