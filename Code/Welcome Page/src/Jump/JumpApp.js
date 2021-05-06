
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom"; //引入路由要用的组件
import Front from "./components/Index"; //二级路由 首页
import FrontContent from "./components/FrontContent"; // 二级路由 视频
import BackContent from "./components/BackContent";
import BackImage from "./components/BackImage";

import "./Router.css";



class AppRouter extends Component {


  render() {
  return (
    <Router>
      <div className="mainDiv">
        {/* 左侧导航部分 */}
        <table>
          <tbody className="mainDiv">
            <tr>
              <td className="leftNav">
              <Redirect from="/" to="/Front" />
                <Route exact path="/Front"  component={Front} />
                <Route path="/BackImage"  component={BackImage} />
              </td>
              {/*右侧部分*/}
              <td className="rightMain">
                <Route path="/Front" exact component={FrontContent} />
                <Route path="/BackImage" exact component={BackContent} />
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/Front">
                  <button  className="FrontBtn">Front</button>
                </Link>
                <Link to="/BackImage">
                  <button  className="BackBtn">Back</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Router>
  );
}
}

export default AppRouter;
