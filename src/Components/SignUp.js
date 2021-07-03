import React, { useState, useContext } from 'react';

import firebase from "firebase/app";
import UserContext from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUp = () => {

  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(res => {
        context.setUser({ email: res.user.email, uid: res.user.uid })
      })
      .catch(error => {
        console.log(error);
        toast(error.message, { type: "error" })
      })
  }

  if (context.user?.uid) {
    return <Redirect to="/" />
  }

  return (
    <div className="signup">
      <div className="signupBox">
        <h1>
          Sign <span style={{color:"#EF2D56"}}>up</span> to continue to Github API
        </h1>
        <div className="emailArea">
          <p>
          Enter your Email
          </p>
          <input
            type="email"
            name="email"
            className="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordArea">
          <p>
          Create a strong password
          </p>
          <input
            type="password"
            name="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleSignup} className="handleSignup">Sign Up</button>
    </div>
    
  );
}

export default SignUp;
