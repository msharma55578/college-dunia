import React, { Component } from "react";
import jfile from "./colleges.json";
import "./Main.css";
import imageclg from "../images/college_02.jpg";
export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      colleges: [],
    };
  }

  componentDidMount() {
    this.ten_college();
  }

  ten_college = () => {
    this.getColleges(0, 10);
  };
  // window.onscroll = function(ev) {
  //   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
  //       alert("you're at the bottom of the page");
  //   }
  //};
  getEmphasizedString = (str, word) => {
    let emphasized = [];
    let stringWords = str.split(" ");
    // for (let j = 0; j < word.length; j++) {
      for (let i = 0; i < stringWords.length; i++) {
        let currentWord = stringWords[i];
        if (currentWord === word[0] || currentWord === word[1] || currentWord === word[2]) {
          emphasized.push({
            word: currentWord,
            bold: true,
          });
        } else {
          emphasized.push({
            word: currentWord,
            bold: false,
          });
        }
      }
    // }

    return emphasized;
  };

  getColleges(offset, limit) {
    let dataArray = [];

    for (let i = offset; i < offset + limit; i++) {
      let current = jfile.colleges[i];
      dataArray.push(current);
    }
    this.setState({
      colleges: dataArray,
    });
  }
  render() {
    // console.log(jfile);
    // const post = jfile.colleges;
    // console.log(this.state);
    return (
      <>
        <div className="layer">
        <div className="clghead">Colleges in North India</div>
          {this.state.colleges &&
            this.state.colleges.map((details) => {

              let boldArray = ["2.5kms","7","Kms"];
              let landmarkstring = this.getEmphasizedString(details.famous_nearest_places,boldArray);

              return (
                // <div>
                //   <h3>{details.college_name}</h3>
                //   <p>discount: {details.discount}</p>
                // </div>
                <div class="card">
                 <div className="container1">
                 <img src={imageclg} className="imagestyle"/>
                 <div class="bottom-right">#{details.ranking}</div>
                 <div className="top-right1">
                 <div className="parmot">PROMOTED</div>
                 </div>
                 <div className="top-right">
                 <div className="rating"><b>3.5</b>/5</div>
                 <div className="remark">{details.rating_remarks}</div>
                 </div>
                 <div className="bottom-left">
                   <div className="tagstyle1">{details.tags[0]}</div>
                   <div className="tagstyle2">{details.tags[1]}</div>
        
                 </div>
                 </div>
                 <div className="container">
                 <h4 className="heading">{details.college_name}</h4>
                 <div className="nearmain">
                 <div className="near1">{details.nearest_place[0]} |</div>
                 <div className="near2">{details.nearest_place[1]}</div>
                 </div> 
                 <div className="famous"><b> 93% Match: </b>{landmarkstring.map(str=>{
                    return str.bold?<b>{str.word} </b>:<span>{str.word} </span>
                  })}  </div>   
                 <div className="bottom-left2">{details.offertext}</div>
                 <div className="bottom-right2">{details.amenties[0]} .{details.amenties[0]} </div>
                 <div className="bottom-right3">{details.fees_cycle}</div>
                 <div className="bottom-right4">Rs.{details.discounted_fees}</div>
                 <div className="bottom-right5">
                 <div className="penta">20</div>
                 </div>
                 <div className="bottom-right6">RS.{details.original_fees}</div>
                </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
