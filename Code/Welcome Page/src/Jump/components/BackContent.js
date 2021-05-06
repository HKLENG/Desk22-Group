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
                className="btn9"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=eE7dzM0iexc";
                }}
              >
                UPPER BACK
              </button>
            </td>
            <td>
              <button
                className="btn10"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=TSZx4adyiGE";
                }}
              >
                INFRASPINATUS
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn11"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=tMyFe-IL7Ks";
                }}
              >
                TRICEPS
              </button>
            </td>
            <td>
              <button
                className="btn12"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=OXvQe9payHw";
                }}
              >
                MINDDLE BACK
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn13"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=2daigSBkx68";
                }}
              >
                LOWER BACK
              </button>
            </td>
            <td>
              <button
                className="btn14"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=IQj9nc5aaCE";
                }}
              >
                GLUTEUS<br/> MAXIMUS
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="btn15"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=crIa7vtwziY";
                }}
              >
                HAMSTRING<br/> GROUP
              </button>
            </td>
            <td>
              <button
                className="btn16"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.youtube.com/watch?v=MuD58rqj8SE";
                }}
              >
                CALF
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Video;
