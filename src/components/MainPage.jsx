import React, { Component } from "react";

import jfile from "./colleges.json";
import "./Main.css";

export default class MainPage extends Component {
  render() {
    const post = jfile.colleges;
    return (
      <>
        <div className="layer">
          {post.map((details) => {
            return (
              <div className="card_box">
                <h3>{details.college_name}</h3>
                <p>discount: {details.discount}</p>
                {/* <img src={"/college_02.jpg"} alt="logo" /> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
