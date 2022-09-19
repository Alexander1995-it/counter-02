import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counterReducer
})

export const store = legacy_createStore(rootReducer)