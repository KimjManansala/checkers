import React, { Component } from "react";
import Sections from "../Sections";
import '../../styles/about.css'
import {aboutCheckersPar, renderAbout} from '../AboutFunctions'
class AboutSections extends Component {
  render() {
    return (
        <div className="section">
          <Sections title={'About CheckersJS'} content={aboutCheckersPar()}/>
          <Sections title={'About Me'} content={renderAbout()}/>
      </div>
    );
  }
}

export default AboutSections;
