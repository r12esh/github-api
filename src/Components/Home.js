import React, { useContext, useState, useEffect } from 'react';
import UserContext from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { toast } from 'react-toastify';
import Bio from '../GithubInfoDisplay/Bio';
import Repos from '../GithubInfoDisplay/Repos';


const Home = () => {

  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("No Such User", { type: "error" })
    };
  }

  if(!context.user?.uid){
    return <Redirect to="/signin"/>
  };

  return (
    <div className="home">
      <div className="left">
        <div className="queryHandle">
          <input
            name="query"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Please provide the username"
          />
          <button onClick={fetchUser}>Fetch User</button>
        </div>
        {user ? <Bio user={user} /> : null}
      </div>
      <div className="right">
        {user ? <Repos repos_url={user.repos_url} /> : null}
      </div>
    </div>
  )


};
export default Home;
