import React, { Component } from 'react'
 //The main layout that appears on all pages
const Layout = ({ children }: any) => {
    return (
        
                <div   className="  w3-top">
                  <a className="w3-button w3-orange" href="/">Home</a>
                    {children}

                 </div>
             
         

         
    );

}

export default Layout