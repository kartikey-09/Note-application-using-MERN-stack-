
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";


const initialState = {
    token:null,
    auth:false,
    loading:false,
    error:false
};
// Redux can be used as a data store for any UI layer
export default function userReducer( state=initialState,action){

    const {type,payload}=action

    switch (type){
        
        // these are all the cases while user login on the application
        case LOGIN_USER_LOADING:{      
            return {
                ...state, loading:true
            }
        }
        case LOGIN_USER_SUCCESS:{
            return {
               
                ...state, loading:false,error:false,token:payload,auth:true
            }
        }
        case LOGIN_USER_ERROR:{
            
            return {
                
                ...state, loading:false,error:true 
                                
            }
        }
        default:{

            return state;
        }
    }
}
