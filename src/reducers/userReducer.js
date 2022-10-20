import {  SET_USER } from "../types/products.types";
import cartInitialState from "./Cart.initialstate";


const userReducer=(state=cartInitialState,action)=>{
    switch(action.type){
        case SET_USER:
            return {...state,userData:[...state.userData,action.paylaod]};
            default:
                return state;
    }
};

export default userReducer