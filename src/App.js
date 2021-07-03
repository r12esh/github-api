import React, {useState, useContext} from "react";
import {Switch, BrowserRouter as Router ,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import './App.css';
import "react-toastify/dist/ReactToastify.css";

//Context
import UserContext from "./Context/UserContext";

//Components
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import PageNotFound from "./Components/PageNotFound";
import Header from "./Components/Header";

// firebase config
import firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from "./Config/FirebaseConfig";
firebase.initializeApp(FirebaseConfig);

function App() {

  const [user, setUser] = useState();

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
