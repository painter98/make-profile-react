import React,{useState} from 'react';
import { signUp } from '../redux/actions/signupAction';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [success,setSuccess] = useState(false);
    let [failure,setFailure] = useState(false);
    let [message,setMessage] = useState('');
    let [confirmPassword,setConfirmPassword] = useState('');

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let signingup = (e) => {
        e.preventDefault();
        console.log('heeloo')

        if(name === '' || email ==='' || password === '' || confirmPassword === ''){
            setFailure(true);
            setMessage('All fields are mandatory');
        }
        else if(password !== confirmPassword){
            setFailure(true);
            setMessage('passwords does not match');
        }
        else{
            setFailure(false);
            setSuccess(true);
            let user = {
                name,
                email,
                password,
                confirmPassword
            }

            let accessToken = generateToken();

            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem('accessToken',JSON.stringify(accessToken));
   
            setMessage('Signup successfully completed');
            setTimeout(()=>{
                navigate('/profile');
            },1000)

            dispatch(signUp({user,accessToken}));
        }
    }

    return (
        <div className='container'>
            <form onSubmit={signingup}>
                Name:
                <br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter the name'/>
                <br/>
                Email:
                <br/>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='enter the email'/>
                <br/>
                Password:
                <br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='enter the password'/>
                <br/>
                Confirm Password:
                <br/>
                <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm password'/>
                <br/>
                <button type='submit'>Sign Up</button>
                <br/>
                {(success || failure) && <p style={{color:success?'green':failure?'red':'black'}}>{message}</p>}
            </form>
            
        </div>
    )
}

export default SignUp;

function generateToken(){
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let token = '';

    for(let i=0;i<16;i++){
        token += string[Math.floor(Math.random()*16)]
    }
    return token;
}