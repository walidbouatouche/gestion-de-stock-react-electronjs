import React, { Component } from 'react'
import {  faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Layout = ({ children }: any) => {
    return (
        
                <div  >
                  <div  className="w3-red">
                       
                  <Link className="w3-button " to="/">
                  <FontAwesomeIcon icon={faHome} />   </Link>
                  </div>
                  <div style={{borderTop:"1px   solid gray", height:"4px"}}>
                       </div>
                    {children}
             
                 </div>
             
         

         
    );

}

export default Layout