import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logOut } from '../redux/actions/signupAction';

const Profile = () => {
    let data = useSelector(state => state.data);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    console.log('profile' ,data);


    let logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');

        dispatch(logOut());
        navigate('/');
    }
    return (
        <div>
            {data && 
            <div>
                <p>Full Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Email: {data.password}</p>
                <button onClick={logout}>LogOut</button>
            </div> } 
        </div>
    )
}

export default Profile;