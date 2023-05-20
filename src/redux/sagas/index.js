import {watchUsers} from "./user";
import {all,spawn,call} from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        watchUsers()
    ])
}