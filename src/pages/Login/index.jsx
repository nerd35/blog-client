import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
        })
        
    dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
        
    dispatch({type:"LOGIN_FAILURE"});
    }
  };
  
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label> Username</label>
        <input type="text" placeholder="Enter your username..." ref={userRef} />
        <label> Password</label>
        <input type="password" placeholder="Enter your password..." ref={passwordRef}/>
        <button className="login-submit" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="register-button">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
