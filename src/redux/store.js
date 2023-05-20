import {combineReducers, configureStore} from "@reduxjs/toolkit";
import user from "../redux/slices/user";
import users from "../redux/slices/users";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    user,
    users
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);