import React, { useState, useEffect } from 'react'
import menu from '../static/menu.json'
import { Link } from 'react-router-dom'
 
import Model from "../compenents/model";

import Layout from '../layout'
const Home = () => {

 
 

    return (
        <Layout >
 
            <ul className="w3-ul w3-hoverable w3-white">
                <div className="w3-white w3-margin">
                     
                    <ul className="w3-ul w3-hoverable w3-white ">

                        <Menu menu={menu} />
                    </ul>
                </div>
            </ul>
                        

  
       
        </Layout>
    )

}



const Menu = ({ menu }: any) => {

    return (
        menu.map((item: any) => (
            <li key={item.id} className="w3-padding-16 w3-margin  w3-hover-grayscale">

                <Link className="w3-padding" to={'/' + item.id}>
                    <img src={item.imguri} alt="Image" className="w3-left w3-margin-right  " style={{ width: '50px' }} />
                    <span className="w3-large w3-text-black"> {item.title}</span>
                    <br />
                    <span className="w3-text-gray">{item.tags}</span>
                </Link>
            </li>
        )))
}


export { Home, Menu }