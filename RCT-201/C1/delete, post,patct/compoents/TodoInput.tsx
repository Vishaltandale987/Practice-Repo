import React, { useState } from 'react'
import { addData } from '../api'
import { Todo, TodoType } from '../constains'

interface todoInputType{
    handleAdd:(props:Todo)=>void
}

const TodoInput = (props:todoInputType) => {
    const [value,setValue] = useState<string>('')

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.target.value)
    }

    const handleClick:React.MouseEventHandler<HTMLButtonElement> = async()=>{
        let res = await addData(value,TodoType.PENDING) 
        props.handleAdd(res)
    }
  return (
    <div>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput