import React, { Component } from "react";
import jfile from "./colleges.json";
export default class MainPage extends Component {
  constructor() {
    super();
    this.ten_college();
  }

  ten_college = () => {
    jfile.colleges.map((details) => {
      return (
        <div>
          <h3>details.college_name</h3>
          <p>discount: {details.discount}</p>
        </div>
      );
    });
  };
  
  render() {
    const post = jfile.colleges;
    return (
      <>
        <div>{ten_college()} </div>
        <h1>{jfile.colleges[0].college_name}</h1>
        {/* <h1>{post.college_name}</h1> */}
      </>
    );
  }
}
