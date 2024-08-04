import {thunk} from "redux-thunk";
import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {Reducer} from "./Reducer.js";


const rootReducer = combineReducers({ data: Reducer});

const middleware = [thunk, logger];

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;