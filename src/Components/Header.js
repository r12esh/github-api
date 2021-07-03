import React, { useState, useContext } from 'react';
import UserContext from "../Context/UserContext"
import { Link } from "react-router-dom";

const Header = () => {

  const context = useContext(UserContext);


  return (
    <div className="header" style={{ position: "relative" }}>
      <span style={{ fontSize: "31px", margin: "9px 20px", fontWeight: "500" }}>
        <Link to="/" style={{ color: "#1E2019", textDecoration: "none" }}>
          Home
        </Link>
          {context.user?.email ? (
            <span style={{marginLeft:"20px",marginTop:"1px",fontSize:"20px"}}>
              Signed in as {context.user?.email}
            </span>
          ) : null}
      </span>
      <span style={{ position: "absolute", fontSize: "22px", right: "0px", margin: "12px" }}>
        {context.user ? (
          <span style={{ cursor: "pointer" }} onClick={() => context.setUser(null)}>Log out</span>
        ) : (
          <>
            <span style={{ marginRight: "14px", cursor: "pointer" }}> <Link to="/signin" style={{ color: "#161A1D", textDecoration: "none" }}>Sign In</Link></span>
            <span style={{ marginRight: "10px", cursor: "pointer" }}><Link to="signup" style={{ color: "#161A1D", textDecoration: "none" }}>Sign Up</Link></span>
          </>

        )}
      </span>
    </div>
  );
}

export default Header;
