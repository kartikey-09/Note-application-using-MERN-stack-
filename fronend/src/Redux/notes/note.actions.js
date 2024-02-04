
import axios from "axios"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types"
import { BASE_URL } from "../../constants/config"
import { store } from "../store"
import {useSelector} from "react-redux"



// Inside your component
// const token = useSelector((state) => state.userReducer.token);
const{token}= store.getState().userReducer

// console.log(store.getState().user)
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc1NTI3ZTBmN2ZmN2RkYTlmZDJkYWYiLCJpYXQiOjE3MDI0NTQ0NjgsImV4cCI6MTcwMjQ1NDY0OH0.LYnbdnC_iR6QqgZBwc2zkwlfYkNdhADPpzMP90TkmHk";

// to get notes
export const getNotes=(token)=>async(dispatch)=>{

    // const {token}=useSelector((state)=>state.userReducer)
    const{token}= store.getState().userReducer

    dispatch({type:GET_NOTES_LOADING})
    try {
        
        const res=await axios(BASE_URL+"/note",{
            
            method:"get",
            headers:{
                
                Authorization:token
            }
        })

        const{status,message,data}=res.data
        console.log(message)
        
        if(status===1)
        {
            dispatch({type:GET_NOTES_SUCCESS,payload:data})
        }
        else{
            console.log("yha fassa")
             dispatch({type:GET_NOTES_ERROR})
           

        }

       
    } catch (error) {
        
        
        dispatch({type:GET_NOTES_ERROR})
        
    }

}
//dispatch(getNotes(token));
 // to create notes
export const createNotes=(obj)=>async(dispatch)=>{

    // const {token}=useSelector((state)=>state.userReducer)
    const{token}= store.getState().userReducer

    dispatch({type:CREATE_NOTES_LOADING})
    try {
        
        const res=await axios(BASE_URL+"/note/create",{
            method:"post",
            data:obj,
            headers:{
                Authorization:token
            }
        })

        const{status,message}=res.data
        console.log(message)
        if(status==1)
        {
            dispatch({type:CREATE_NOTES_SUCCESS})
        }
        else{
            dispatch({type:CREATE_NOTES_ERROR})
        }

       
    } catch (error) {

        dispatch({type:GET_NOTES_ERROR})
        
    }

}

// to delete notes
export const deleteNotes=(id)=>async(dispatch)=>{

    // const {token}=useSelector((state)=>state.userReducer)
    const{token}= store.getState().userReducer

    dispatch({type:DELETE_NOTES_LOADING})
    try {
        
        const res=await axios(BASE_URL+"/note/"+id,{
            method:"delete",
            headers:{
                Authorization:token,
                id:id
            }
        })

        const{status,message}=res.data
        console.log(message)
        if(status==1)
        {
            dispatch({type:DELETE_NOTES_SUCCESS})
        }
        else{
            dispatch({type:DELETE_NOTES_ERROR})
        }

       
    } catch (error) {

        dispatch({type:DELETE_NOTES_ERROR})
        
    }

}

// to update notes
export const updateNotes=(obj,id)=>async(dispatch)=>{

    // const {token}=useSelector((state)=>state.userReducer)
    const{token}= store.getState().userReducer

    dispatch({type:UPDATE_NOTES_LOADING})
    try {
        
        const res=await axios(BASE_URL+"/note/",{
            method:"patch",
            data:obj,
            headers:{
                Authorization:token,
                id:id
            }
        })

        const{status,message}=res.data
        console.log(message)
        if(status==1)
        {
            dispatch({type:UPDATE_NOTES_SUCCESS})
        }
        else{
            dispatch({type:UPDATE_NOTES_ERROR})
        }

       
    } catch (error) {

        dispatch({type:UPDATE_NOTES_ERROR})
        
    }

}

