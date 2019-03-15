import React, { Component } from "react";
import Sections from "../Sections";
import '../../styles/about.css'
import {aboutCheckersPar, aboutMe} from '../AboutFunctions'
class AboutSections extends Component {
  render() {
    return (
      <div className="sections-body">
        <div className="section">
          <Sections title={'About CheckersJS'} content={aboutCheckersPar()}/>
            <div className='section-par'>
                <h1>About me!</h1>
            <p>Hi! My name is KimJ and I am the developer behind this checkers game. This checkers game is built with React and Redux. This 
    project is aime to help me build my skills with React and Redux. I hopefully made it as modular as I can so that I may easily add to the checkers
    game and add other games! Check out the repository at <a href='https://github.com/KimjManansala/checkers'>Github</a> and check me out
    at <a href='https://www.linkedin.com/in/kim-jasper-manansala/'>Linkedin </a> </p>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutSections;
