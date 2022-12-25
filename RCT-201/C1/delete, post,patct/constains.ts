
export enum TodoType{
    PENDING="PENDING",
    DONE="DONE"
}

export type Todo = {
    id:number,
    title:string,
    status:TodoType.PENDING
}

