import React from 'react'
import { deleteData, updateData } from '../api'
import { Todo, TodoType } from '../constains'

interface itemType{
    todo:Todo,
    updateTodo:(prop:Todo)=>void
    deleteTodo:(prop:Todo)=>void
}

const TodoItem = ({todo,updateTodo,deleteTodo}:itemType) => {

  const handleUpdate:React.MouseEventHandler<HTMLParagraphElement> =async()=>{
    let res = await updateData(todo)
    console.log(res)
    updateTodo(res)
  }
  const handleDelete:React.MouseEventHandler<HTMLButtonElement>  = async()=>{
    let res = await deleteData(todo)
    deleteTodo(res)
  }

  return (
    <div>
      
       {todo.title}
        <p onClick={handleUpdate} > {todo.status} </p>
        <button onClick={handleDelete} >Delete</button>
       <hr />
      
    </div>
  )
}

export default TodoItem