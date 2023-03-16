import React from 'react';
import "../App.css";
import {Navbardata} from './Navbardata'
import { Link } from "react-router-dom";

function SideNavBar(){
    return <div className="SideNavBar">
        <img src="/logo.jpg" alt="" />
        <ul className="NavbarList">
         {Navbardata.map((val,key)=>{
        return(
             <li key={key}
             className="row"
             onClick={()=>{window.location.pathname=val.link}}> 
             
             
             <div id="icon">{val.icon}</div>
             <div id="title">
                {val.title}
             </div>
             </li>
            
        );
    })}
    </ul>
        
    </div> 
}

export default SideNavBar;