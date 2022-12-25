import axios, { AxiosResponse } from "axios"


// getdata

// export const getTodos = async (): Promise<Todo[]> => {
//     let response: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/data");
//     return response.data;
// }

// updatedata

// export const updateTodo = async (changedTodo: Todo): Promise<Todo> => {
//     let response: AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${changedTodo.id}`,
//         {
//             ...changedTodo,
//         }
//     );
//     return response.data;
// }

// // postdata

// export const addTodo = async (message: string, type: TodoType):Promise<Todo> => {
//     let response: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos",{
//         message,
//         type,
//         likes:0,
//     });
//     return response.data;
// }
