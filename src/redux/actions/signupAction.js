import { SIGN_UP,LOG_OUT} from './actionsTypes.js';

export const signUp = (prop) => {
    console.log('signupactions',prop);
   return  ({
        type:SIGN_UP,
        payload:prop
    })
}

export const logOut = () => {
    return ({
        type:LOG_OUT
    })
}
