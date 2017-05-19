import initState from '../state';

const feeds = (state = initState, action) => {
    switch(action.type) {
        case 'FEED_SELECT':
            return Object.assign({}, state, {
                selected_feed_id: action.selected_feed_id
            })
        }
    return state;
}

export default feeds