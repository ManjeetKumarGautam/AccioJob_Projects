import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';


const Profile = () => {
    const { user, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [navigate, token]);


    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className='profile'>
            <h1>Profile-</h1>
            {
                user ? <>
                    <p><b>Name : </b>{user.name}</p>
                    <p><b>Email : </b>{user.email}</p>
                    <p><b>Password : </b>{user.password}</p>
                    <button onClick={handleLogout}>Logout</button>
                </> :
                    <p>You need to SignUp...</p>
            }
        </div>
    )
}

export default Profile