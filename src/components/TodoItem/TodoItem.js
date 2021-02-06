import React,{useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {Label} from './TodoItemStyles';
import {deleteTodo, updateTodo} from '../../actions';
const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  
  const deleteTodoClick = useCallback((e) => {
    e.stopPropagation();
    dispatch(deleteTodo(todo.id))
  },[])

  const updateTodoClick = (e) => {
    dispatch(updateTodo(todo.id))
  }
  // const data = state.todos.map(todo => {
  //   if(todo.id===action.data){
  //     todo.checked = !todo.checked
  //     return todo
  //   }
  // });
  return (
    <li data-id={todo.id}>
      <Label label checked={todo.checked}><input type="checkbox" checked={todo.checked} onClick={updateTodoClick} />{todo.content}</Label>
      <button type="button" onClick={deleteTodoClick}>삭제</button>
    </li>
  )
}

export { TodoItem };
