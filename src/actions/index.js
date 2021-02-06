// export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
// export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
// export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

// export const DELETE_TODO_REQUEST = "ADD_TODO_REQUEST";
// export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
// export const DELETE_TODO_FAIL = "ADD_TODO_FAIL";

// export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
// export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
// export const UPDATE_TODO_FAIL = "UPDATE_TODO_FAIL";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "ADD_TODO";
export const UPDATE_TODO = "ADD_TODO";


export const addTodo = (data) => ({
  type:ADD_TODO,
  data
})

export const deleteTodo = (data) => ({
  type:DELETE_TODO,
  data
})

export const updateTodo = (data) => ({
  type:ADD_TODO,
  data
})