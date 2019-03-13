import React from 'react'
import { Link } from "react-router-dom";
const Tabs = ({method, tabs, currentActive}) => {
    console.log(tabs)
  return (
    <React.Fragment>
    <li onClick={()=>{
        console.log(tabs.text)
        method(tabs.text)}}
    className={currentActive === tabs.text? 'is-active': ''}>

    <Link to={tabs.route}>
    {tabs.text}
    </Link>


    </li>


    </React.Fragment>
  )
}

export default Tabs
