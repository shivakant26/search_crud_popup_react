import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
       let token =  localStorage.clear("token");
       if(!token){
        navigate("/")
       }
    },[])
    return(
        <></>
    )
}

export default Logout;