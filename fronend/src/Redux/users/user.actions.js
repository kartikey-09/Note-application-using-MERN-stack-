import axios, { Axios } from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";
import { BASE_URL } from "../../constants/config";




export const getUser = (obj) => async (distpatch) => {
  distpatch({ type: LOGIN_USER_LOADING });
  try {
    let data = await axios(BASE_URL+"/user/login", {
      method: "post",
      data: obj
    })
    let { message, token, status } = data.data
    
    if(status==1)
    {
        distpatch({type:LOGIN_USER_SUCCESS,payload:token})
    }
    else{
        distpatch({type:LOGIN_USER_ERROR})
    }
    
  } catch (error) {
    distpatch({type:LOGIN_USER_ERROR})
  }

  
}
