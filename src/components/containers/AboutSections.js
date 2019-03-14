import React, { Component } from "react";
import Sections from "../Sections";

class AboutSections extends Component {
  render() {
    return (
      <div className="sections-body">
        <div className="section">
          <Sections title={'About CheckersJS'} content={/* A function that should go here should return what should be in About Checkersjs*/}/>
        </div>
      </div>
    );
  }
}

export default AboutSections;
