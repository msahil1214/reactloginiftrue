import React from "react";
import Login from "./login";
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <h1>hello</h1> : <Login />}
    </div>
  );
}

export default App;
