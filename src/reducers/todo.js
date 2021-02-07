import shortId from 'shortid';
import {
  ADD_TODO_FAIL, ADD_TODO_SUCCESS, ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL,
  UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL
} from '../actions'

export const initalState = {
  todos:[{
    id: shortId.generate(),
    content: "할일 항일",
    checked:false,
  }],
  addTodoError: null,
  removeTodoError: null,
  updateTodoError: null,
}

const reducer = (state = initalState, action) =>{
  switch(action.type){
    case ADD_TODO_REQUEST :
    return{
        ...state,
        addTodoError: null,
      };
    case ADD_TODO_SUCCESS :
      return{
        ...state,
        todos:[action.data, ...state.todos]
      };
    case ADD_TODO_FAIL :
      return{
        ...state,
        addTodoError: action.error,
      };
    case DELETE_TODO_REQUEST :
      return{
        ...state,
        removeTodoError: null,
      };
    case DELETE_TODO_SUCCESS :
      return{
        ...state,
        todos:state.todos.filter((todo) => (todo.id !== action.data)),
      };
    case DELETE_TODO_FAIL :
      return{
        ...state,
        removeTodoError: action.error,
      };
    case UPDATE_TODO_REQUEST : 
      return {
        ...state,
        updateTodoError: null,
      };
    case UPDATE_TODO_SUCCESS : 
    return {
      ...state,
      todos:state.todos.map((todo) => 
        todo.id === action.data
          ? {...todo, checked:!todo.checked} 
          : todo
      )
    };
    case UPDATE_TODO_FAIL : 
    return {
      ...state,
      updateTodoError: action.error,
    };
    default:
      return state;
  }
};

export default reducer