import React from 'react'
import { Link } from "react-router-dom";
const Tabs = ({method, tabs, currentActive}) => {

  return (
    <React.Fragment>
    <li onClick={()=>{
        console.log('Hello ')

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
