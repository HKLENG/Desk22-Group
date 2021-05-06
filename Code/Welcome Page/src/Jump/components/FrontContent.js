//视频页面 二级路由
import React from "react";

import "../Router.css";
import "./Styles.css";
import "./button.css";

function Video() {
  return (
    <div className="buttonStyle">
      <table>
        <tbody>
          <tr>
            <td>
              <button
                className="btn1"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=Ux4fqfmzh4E";
                }}
              >
                DELTOID
              </button>
            </td>
            <td>
              <button
                className="btn2"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=89e518dl4I8";
                }}
              >
                CHEST
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn3"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=iGYeHsgb4CY";
                }}
              >
                BICEPS
              </button>
            </td>
            <td>
              <button
                className="btn4"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=4EkKhkSNjWY";
                }}
              >
                FOREARMS
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn5"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=Goe-ODprA1A";
                }}
              >
                SIDE ABS
              </button>
            </td>
            <td>
              <button
                className="btn6"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=1919eTCoESo";
                }}
              >
                ABDOMINALS
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn7"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=RjexvOAsVtI";
                }}
              >
                QUADRICEPS
              </button>
            </td>
            <td>
              <button
                className="btn8"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=K-CrEi0ymMg";
                }}
              >
                TIBALIS<br/>
                ANTERIOR
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Video;
