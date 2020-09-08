    
import { authMe } from "./auth_reducer";

const INITIOLIZED_SUCCESS = 'INITIOLIZED_SUCCESS'; 

let initialState =  {
    initialized: false
  
};

const appReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case INITIOLIZED_SUCCESS: 
      
            return {
               
                ...state,
                initialized: true
               
                }
        default:
            return state; 
    }
}

export const initializedSuccess = () => ({   type: INITIOLIZED_SUCCESS});   

export const initializeApp = () => {
    return (dispatch) =>{
        let auhtMeResultPromise = dispatch(authMe());
        auhtMeResultPromise.then( () => {
            dispatch(initializedSuccess())
        });
    } 
}

export default appReducer ;