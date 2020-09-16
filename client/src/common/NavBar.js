import React from 'react';
import { NavLink, withRouter} from "react-router-dom";
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const NavBar = () => {
    const navLink = [ 
        {'name':'HTML', 'path':'/HTML', 'icon': <FaHtml5/> },
        {'name':'CSS', 'path':'/CSS', 'icon': <FaCss3/> },
        {'name':'JavaScript',  'path':'/JavaScript', 'icon': <IoLogoJavascript/>},
        {'name':'React JS',  'path':'/ReactJS', 'icon': <IoLogoJavascript/>},
        {'name':'TypeScript',  'path':'/TypeScript', 'icon': <IoLogoJavascript/>}      
      ]

    return(
       <nav>
           <ul>
                {
                    navLink.map((e, index) => 
                        <li key={index}>
                            <NavLink to={e.path} key={index}>
                                {e.icon } {e.name}
                            </NavLink>
                        </li>
                    )
               }
           
           </ul>
       </nav>
    )
}

export default withRouter(NavBar);