import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "./index.css";
import App from "./App";
import JumpApp from "./Jump/JumpApp";

ReactDOM.render(
  <div>
    <div className="FirstPage">
    <h1 className="Title">WELCOME</h1>
      <table className="FirstTable">
        <tbody>
          <tr>
            <td>
          <button
        className="BUTTON_Join"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:5000/login";
        }}
      >
        JOIN
      </button>
      </td>
      <td><h1 className="JoinDescription">US FOR MORE!</h1></td>
      </tr>
      <tr><td>
      <button
        className="BUTTON_Plan"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:5000/";
        }}
      >
        SEE
      </button>
      
        </td>
        <td>      
        <h1 className="PlanDescription">YOUR PLAN</h1>
          </td></tr>
        </tbody>
      </table>
      
      
    </div>
    <div className="middle">
      <Router>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/JumpApp">
                  <button className="JumpBtn">FIND</button>
                </Link>
              </td>
              <td>
                <h1 className="JumpDescription">What You Can Learn</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <Route path="/JumpApp" exact component={JumpApp} />
      </Router>
    </div>
    <div className="App-styles">
      <Router>
        <table className="bottomTable">
          <tbody>
            <tr>
              <td>
                <Link to="/PlanApp">
                  <button className="AppBtn">CREATE</button>
                </Link>
              </td>
              <td>
                <h1 className="AppDescription">Your Own Plan</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <Route path="/PlanApp" exact component={App} />
      </Router>
    </div>
  </div>,
  document.getElementById("root")
);
