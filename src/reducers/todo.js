import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions';
import shortId from 'shortid';
// import {
//   ADD_TODO_FAIL, ADD_TODO_SUCCESS, ADD_TODO_REQUEST,
//   DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL,
//   UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL
// } from '../actions'

export const initalState = {
  todos:[{
    id: shortId.generate(),
    content: "할일 항일",
    checked:false,
  }]
}

const reducer = (state = initalState, action) =>{
  switch(action.type){
    case ADD_TODO :
    return{
        ...state,
        todos:[action.data, ...state.todos]
      };
    case DELETE_TODO :
      return{
        ...state,
        todos:state.todos.filter((todo) => (todo.id !== action.data)),
      };
    case UPDATE_TODO : 
      return {
        ...state,
        todos:state.todos.map((todo) => 
          todo.id === action.data
            ? {...todo, checked:!todo.checked} 
            : todo
        )
      };
    default:
      return state;
  }
};

// export const reducer = (state = initalState, action) =>{
//   switch(action.type){
//     case ADD_TODO_REQUEST :
//       return{
//       };
//     default:
//       return state;
//   }
// };

export default reducer