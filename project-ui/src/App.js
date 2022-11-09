import React, {  useState } from "react";
import './App.css';

function App() {
  const baseURL = "http://localhost:3020";


  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getBusinessData() {
    try {
      const res = await fetch(`${baseURL}/external`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };

      setGetResult(fortmatResponse(result));
	  console.log(result);
    } catch (err) {
      setGetResult(err.message);
    }
  }

  



  return (
    <div id="app" className="container my-3">
      <h3>React Fetch example- Docker2</h3>
      <div className="card mt-3">
        <div className="card-header">React Fetch GET</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getBusinessData}>Get Business</button>
          </div>   
        </div>
        { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
      </div>
    </div>
  );
}

export default App;
