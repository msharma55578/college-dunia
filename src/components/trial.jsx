import React, { Component } from "react";
import jfile from "./colleges.json";
export default class MainPage extends Component {
  constructor() {
    super();
    this.state={
      colleges:[]
    }

  }

  componentDidMount(){
    this.ten_college();
  }

  ten_college = () => {
    this.setState({
      colleges:jfile.colleges
    })
  };
  
  render() {
    // console.log(jfile);
    // const post = jfile.colleges;
    console.log(this.state);
    return (
      <>
        
    {this.state.colleges&&this.state.colleges.map((details) => {
    
      return (
        <div>
          <h3>{details.college_name}</h3>
          <p>discount: {details.discount}</p>
        </div>
      );
    })}
        {/* <h1>{jfile.colleges[0].college_name}</h1> */}
        {/* <h1>{post[0].college_name}</h1> */}
      </>
    );
  }
}
