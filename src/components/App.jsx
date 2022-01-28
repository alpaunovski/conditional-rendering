import React from "react";
import Form from "./Form";
export default App;

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome!</h1> : <Form />}
    </div>
  );


}
