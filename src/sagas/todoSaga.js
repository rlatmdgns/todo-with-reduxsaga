import {all, delay, fork, put, takeLatest} from 'redux-saga/effects';
import shortId from 'shortid';
import {
  ADD_TODO_SUCCESS, ADD_TODO_REQUEST,ADD_TODO_FAIL,
  DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL,
  UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL
} from '../actions';
function* addTodo(action){
  try {
    yield delay(100);
    yield put({
      type: ADD_TODO_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: ADD_TODO_FAIL,
      data: action.data,
    });
  }
}
function* deleteTodo(action){
  try {
    yield delay(100);
    yield put({
      type: DELETE_TODO_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_TODO_FAIL,
      data: action.data,
    });
  }
}
function* updateTodo(action){
  try {
    yield delay(100);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_TODO_FAIL,
      data: action.data,
    });
  }
}
function* watchAddTodo(){
  yield takeLatest(ADD_TODO_REQUEST,addTodo);
}
function* watchDelteTodo(){
  yield takeLatest(DELETE_TODO_REQUEST,deleteTodo)
}
function* watchUpdateTodo(){
  yield takeLatest(UPDATE_TODO_REQUEST,updateTodo)
}

export default function* todoSaga(){
  yield all([
    fork(watchAddTodo),
    fork(watchDelteTodo),
    fork(watchUpdateTodo),
  ])
}
