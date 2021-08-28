import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import streams from "../apis/streams";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});