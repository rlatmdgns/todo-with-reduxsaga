
import React,{ useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTodo} from '../../actions'
import shortId from 'shortid'
import TodoItem from '../TodoItem'
import { Form, Input, TogoGroup} from './TodoFormStyles'
const TodoForm = () => {
  const [value, setValue] = useState("");
  const {todos} = useSelector((state)=> state.todo);
  const dispatch = useDispatch();

  const onChange = useCallback((e) =>{
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(value === ""){
      alert("입력하세");
      return;
    }
    const newTodo = {
      id:shortId.generate(),
      content: value,
      check:false
    }
    dispatch(addTodo(newTodo));
    setValue("")
  },[value]);

  return (
    <Form onSubmit={onSubmit}>
      <h1>Todo</h1>
      <div>
        <Input type="text" placeholder="할일을 입력하세요." onChange={onChange} value={value}/>
      </div>
      <TogoGroup>
        {todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </TogoGroup>
    </Form>
  )
}

export {TodoForm}
