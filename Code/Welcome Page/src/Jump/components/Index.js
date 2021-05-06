import React, { Component } from "react";
import Logo from "./image/muscle_front.jpg";
import "./index.css";


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={Logo} alt="" className="image" />
      </div>
    );
  }
}

export default Index;