import React, { useState, useContext } from 'react';

import firebase from "firebase/app";
import UserContext from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {

  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
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
    <div className="signin">
      <div className="signinBox">
        <h1>
          Sign <span style={{color:"#8CD867"}}>in</span> to continue to Github API
        </h1>
        <div className="emailArea">
          <p>
          Email
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
          Password
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
      <button onClick={handleSignin} className="handleSignin">Sign In</button>
    </div>
  );
}

export default SignIn;
