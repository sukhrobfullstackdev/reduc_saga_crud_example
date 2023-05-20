import {addUser, deleteUser, editUser, getUser, getUsers} from "../apis";
import {takeEvery,put,call} from 'redux-saga/effects';
import {addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice} from "../slices/users";
import {setUserSlice} from "../slices/user";
import {CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USERS_BY_ID, UPDATE_USER_BY_ID} from "../types";

export function* getUsersSaga() {
    const result = yield call(getUsers);
    yield put(getUsersSlice(result.data));
}
export function* getUserByIdSaga(id) {
    const result = yield getUser(id);
    yield put(setUserSlice(result));
}
export function* createUserSaga(action) {
    const result = yield addUser(action.user);
    yield put(addUserSlice(result.data));
}
export function* updateUserSaga(user) {
    const result = yield editUser(user.id, user);
    yield put(editUserSlice(result));
}
export function* deleteUserIdSaga(id) {
    const result = yield deleteUser(id);
    yield put(deleteUserSlice(id));
}
export function* watchUsers() {
    yield takeEvery(CREATE_USER, createUserSaga);
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USERS_BY_ID, getUserByIdSaga);
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga);
    yield takeEvery(DELETE_USER_BY_ID, deleteUserIdSaga);
}