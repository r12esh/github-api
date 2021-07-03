import React, {useState, useEffect} from 'react';
import Axios  from "axios";

const Repos = ({repos_url}) => {

  const [repos, setRepo] = useState([]);
  
  const fetchRepo = async () =>{
    const {data} = await Axios.get(repos_url);
    setRepo(data)
  };

  useEffect(()=>{
    fetchRepo()
  },[repos_url]);

  return (
    <div className="repoContainer">
      <h1>Repositories :</h1>
      {/* <hr /> */}
      {repos.map(repo=>(
        <div className="repo" key={repo.id}>
          <h3 className="repoName" style={{color:"#10A8A8"}}>Repo name : {repo.name}</h3>
          <h4 className="repoLanguage" style={{color:"#9CF6F6"}}>Language : {repo.language}</h4>
          <h4 className="repoDescription" style={{color:"#D6A2AD"}}>Description : {repo.description}</h4>  
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Repos;
