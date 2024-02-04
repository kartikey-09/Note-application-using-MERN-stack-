import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { getUser } from "../Redux/users/user.actions";
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/config";



export default function SignupPage() {

    const nav = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  

    
    // const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    // console.log(auth,token)
    
   


  const handleSignup = async() => {
     let data= await axios.post(BASE_URL+"/user/register",{
        name,email,password
     })
     let {message,status}=data.data
     if(status===1){
        alert(message)
        nav ("/login")
     }else{
        alert(message)
     }
  }
//   if(loading) return <h1 style={{marginTop:"80px"}}>Loading</h1>
//   if(error) return <h1 style={{marginTop:"80px"}}>Error//Wrong Credentials </h1>
    //   if(auth){
    //     nav("/notes")
    //     console.log("2")
        
    // }

  return (
    <form>
      
      <label htmlFor="">Name :</label>
      <input
      // yha issue hai
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      ></input>


      <br></br>
      <label htmlFor="">Email Address :</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      ></input>
      <br></br>
      <label htmlFor="">Password :</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <br></br>
      <br></br>
      <Button onClick={handleSignup}> Sign-up</Button>
    </form>
  );
}
