import React, { Component } from "react";

import jfile from "./colleges.json";
import "./Main.css";

export default class MainPage extends Component {
  constructor() {
    super();
  }
  
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

              </div>
            );
          })}
        </div>
      </>
    );
  }
}
