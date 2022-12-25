import axios ,{AxiosResponse} from "axios"
import { Todo, TodoType } from "./constains"

export const getdata = async()=>{
    let responce : AxiosResponse <Todo[]> = await axios.get("http://localhost:8080/todos")
    return responce.data
}

export const addData = async(value:string,stat:TodoType.PENDING):Promise<Todo>=>{
    let responce : AxiosResponse<Todo> =await  axios.post("http://localhost:8080/todos",{
        id:Date.now,
        title:value,
        status:stat
    })
    return responce.data
}

export const updateData = async(todo:Todo) =>{
    let responce : AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${todo.id}`,{
        ...todo,
        status: todo.status==TodoType.PENDING?TodoType.DONE:TodoType.PENDING
    })
    return responce.data
}

export const deleteData = async(todo:Todo)=>{
    let responce : AxiosResponse<Todo> = await axios.delete(`http://localhost:8080/todos/${todo.id}`)
    return responce.data
}