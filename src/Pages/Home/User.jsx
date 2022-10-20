import React,{useEffect} from 'react';
import { fetchUser } from '../../actions/userAction';
import { useDispatch,useSelector } from 'react-redux';
const User = () => {
    // const userSelector=useSelector((state)=>state.cartReducer.products)
    // console.log(userSelector)
const dispatch= useDispatch()
    useEffect(() => {
       dispatch( fetchUser())
    }, [])
    
    return (
        <div>
            dsvsadv
        </div>
    );
};

export default User;