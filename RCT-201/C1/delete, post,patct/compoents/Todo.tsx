import React, { useEffect, useState } from 'react'
import { getdata } from '../api'
import { Todo } from '../constains'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoApp = () => {
    const [todos,setTodos]= useState<Todo[]>([])

    const gettingData =()=>{
        getdata().then((res)=>{
            setTodos(res)
        })
    }

    const handleAdd = (todo:Todo)=>{
       setTodos([...todos,todo])
    }

    const updateTodo = (updaTodo:Todo)=>{
        let upda = todos.map((el)=>{
            if(el.id===updaTodo.id){
                return updaTodo
            }else{
                return el
            }
        })
        setTodos(upda)
    }

    const deleteTodo =(todo:Todo)=>{
        let filt =todos.filter((el)=>el.id!==todo.id)
        setTodos(filt)
        gettingData()
    }
    useEffect(()=>{
        gettingData()
        
    },[])

  return (
    <div>
        <h1>Todo app </h1>
        <TodoInput handleAdd={handleAdd} />
        <div>
        {
            todos.map((el)=>{
                return <TodoItem key={el.id} todo={el} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
        }
        </div>
    </div>
  )
}

export default TodoApp