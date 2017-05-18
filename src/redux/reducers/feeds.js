import initState from '../state';

const feeds = (state = initState, action) => {
    return state;
    // switch (action.type) {
    //     case 'ADD_FEED':
    //         return [
    //             ...state,
    //             {
    //                 id: action.id,
    //                 text: action.text,
    //                 completed: false
    //             }
    //         ]
    //     case 'REMOVE_FEED':
    //         return null;
    //     default:
    //         return state
    // }
}

export default feeds