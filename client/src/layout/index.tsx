import React, { Component } from 'react'
import {  faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Layout = ({ children }: any) => {
    return (
        
                <div  >
                  <div  className="w3-red">
                       
                  <a className="w3-button " href="/">
                  <FontAwesomeIcon icon={faHome} />   </a>
                  </div>
                  <div style={{borderTop:"1px   solid gray", height:"4px"}}>
                       </div>
                    {children}
             
                 </div>
             
         

         
    );

}

export default Layout