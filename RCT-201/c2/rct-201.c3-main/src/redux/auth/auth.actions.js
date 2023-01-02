// Auth Actions here
import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from './auth.types'


export const ACTION_AUTH_SIGN_IN=(creds)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})

    try{
        let res=await axios.post('https://reqres.in/api/login',creds)
        dispatch({type: AUTH_SIGN_IN_SUCCESS,payload:res.data})
        return res.data
    }


    catch(err){
        dispatch({type:AUTH_SIGN_IN_ERROR,payload:err.message})
    }
}

export const ACTION_SIGN_OUT=()=>({type:AUTH_SIGN_OUT})