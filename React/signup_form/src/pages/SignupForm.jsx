import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../slices/authSlice';

const SignupForm = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (e.target["c_password"].value == user.password) {
            const accessToken = Math.random().toString(36).substring(2);

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", accessToken);

            dispatch(signup({ user: user, token: accessToken }))
            navigate("/profile");
        }
    }

    return (
        <div className='signup'>
            <h1>Sign up</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="name" placeholder='Full Name' value={user.name} onChange={onChangeHandler} required />
                <input type="email" name="email" placeholder='Email' value={user.email} onChange={onChangeHandler} required />
                <input type="password" name="password" placeholder='Password' minLength={8} value={user.password} onChange={onChangeHandler} required />
                <input type="text" name="c_password" placeholder='Confirm Password'  required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm