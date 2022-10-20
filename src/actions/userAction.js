
import { SET_USER } from "../types/products.types";



export const fetchUser=()=>{
    return async function  (dispatch){
        await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res2=>{
            dispatch({type:"SET_USER",payload:res2})
        })
    }
}

export const setUser=(data=null)=>{
    console.log("response",data)
    if(data){
    return {
        type:SET_USER,
        payload:data
    }
    }
    return {
        type:SET_USER,
        payload:[]
    }  
}