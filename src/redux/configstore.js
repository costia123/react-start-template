import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import strapiReducer from "./strapi/reducer";
import {thunk} from "redux-thunk";

const reducer = combineReducers({
	strapi: strapiReducer,
});

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
