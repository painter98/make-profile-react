import { SIGN_UP,LOG_OUT} from '../actions/actionsTypes.js';

const initialState = {
    data:null,
    accessToken:null
}

const signUpReducer = (state=initialState,action) => {
    //console.log(action.payload);

    switch(action.type){
        case SIGN_UP:
            console.log(action.payload);
            return ({
                ...state,data:action.payload.user,accessToken:action.payload.accessToken
        })
        case LOG_OUT:
            return ({
                ...state,data:null,accessToken:null
            })
        default:
            return state
    }
}

export default signUpReducer;