

import "../../styles/nav.css";

import { connect } from "react-redux";

import React, { Component } from 'react'
import Tabs from "../Tabs";

class NavbarContainer extends Component {



  render() {

    return (
      <React.Fragment>
      <div className='navBar'>
        <h1>Welcome to my Checkers game!</h1>
      </div>

      <div className="tabs is-centered is-boxed">
        <ul className='tabs-list'>

          {this.props.tabs.map((tabs, index) =>(
            <Tabs method={this.props.setActive} key={index} tabs={tabs} currentActive={this.props.currentActive}/>
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