import {
    FETCH_STREAMS,
    GET_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = {}, action ) => {
    switch (action.type) {
        case GET_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}