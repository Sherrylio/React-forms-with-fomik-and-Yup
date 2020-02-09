import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-page">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        {/* <Login />
        <Signup /> */}
      </div>
    </Router>
  );
}

// home component just to make a nice navigation for the different pages ( I am being lazy :p )
const Home = () => (
  <div className="home">
    <h1> Click to go to the desired page</h1>
    <div className="row">
      <div className="col" id="col1">
        {" "}
        <Link to="/login">
          {" "}
          <a href="#">Login</a>{" "}
        </Link>
      </div>
      <div className="col" id="col2">
        <Link to="/signup">
          {" "}
          <a href="#">Signup</a>{" "}
        </Link>
      </div>
    </div>
  </div>
);

export default App;
