import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { getUser } from "../Redux/users/user.actions";
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

     const nav = useNavigate()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    

   


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handelLogin = () => {
    dispatch(getUser({ email, password }))
  }
  if(loading) return <h1 style={{marginTop:"80px"}}>Loading</h1>
  if(error) return <h1 style={{marginTop:"80px"}}>Error//Wrong Credentials </h1>
      if(auth){
        nav("/notes")
        console.log("2")
        
    }

  return (
    <form>
      <label htmlFor="">name:</label>
      <input type="text"></input>

      <br></br>
      <label htmlFor="">email :</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      ></input>
      <br></br>
      <label htmlFor="">password :</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <br></br>
      <br></br>
      <Button onClick={handelLogin}> Submit</Button>
    </form>
  );
}
