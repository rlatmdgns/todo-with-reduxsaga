import React,{useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {Label} from './TodoItemStyles';
import {deleteTodo, updateTodo} from '../../actions';
const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  
  const deleteTodoClick = useCallback((e) => {
    const targetId =e.target.parentNode.dataset.id;
    console.log(targetId)
    // dispatch(deleteTodo(targetId))
  },[])

  const updateTodoClick = (e) => {
    const targetId =e.target.parentNode.dataset.id;
    dispatch(updateTodo(targetId))
  }
  return (
    <li data-id={todo.id}>
      <Label label onClick={updateTodoClick} checked={todo.check} ><input type="checkbox" checked={todo.check}/>{todo.content}</Label>
      <button type="button" onClick={deleteTodoClick}>삭제</button>
    </li>
  )
}

export { TodoItem };
