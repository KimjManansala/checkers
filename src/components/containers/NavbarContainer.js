

import "../../styles/nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import React, { Component } from 'react'
import Tabs from "../Tabs";

class NavbarContainer extends Component {



  render() {
    console.log(this.props)
    return (
      <React.Fragment>
      <div className='navBar'>
        
      </div>
      <div style={{height: '6vh'}}/>
      <div className="tabs is-toggle is-toggle-rounded">
        <ul className='tabs-list'>

          {this.props.tabs.map((tabs, index) =>(
            <Tabs method={this.props.setActive} key={index}tabs={tabs} currentActive={this.props.currentActive}/>
          ))}

          {/* <li className='is-active'>
            <a>Pictures</a>
          </li>
          <li className=''>
            <a>Pictures</a>
          </li> */}
        </ul>
      </div>

    </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  currentActive : state.navBar
  
});

const mapDispatchToProps = dispatch => ({
  setActive :(tabs) =>dispatch({type:'CHANGE_TAB' ,value: tabs})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);