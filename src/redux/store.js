import {createStore} from 'redux';
import signUpReducer from './reducer/signupReducer';

const store = createStore(signUpReducer)
export default store; 