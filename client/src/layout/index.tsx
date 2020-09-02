import React, { Component } from 'react'

//The main layout that appears on all pages
const Layout = ({ children }: any) => {
    return (
        <div >

            <div className="w3-row">
                <div className="w3-col   w3-margin-top">
                    <br />
                    {children}
                </div>
                {/* <Rightside /> */}
            </div>

        </div>
    );

}

export default Layout