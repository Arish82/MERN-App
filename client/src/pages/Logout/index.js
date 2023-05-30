import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
    const navigate=useNavigate();
    const handleLogout=async ()=>{
        try{
            const res=await fetch("/logout",{
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data=await res.json();
            if(res.status!==200 || !data){
                console.log(data);
            }
            if(data){
                console.log("logout success");
                props.setlogin(false)
                navigate("/");
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        handleLogout()
    }, [])
    
    return (
        <>
            
        </>
    )
}
