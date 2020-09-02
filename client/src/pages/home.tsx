import React, { useState } from 'react'
import  menu  from '../static/menu.json'
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className="w3-white w3-margin">
  
           
            <ul className="w3-ul w3-hoverable w3-white">
                <div className="w3-white w3-margin">
                    <div className="w3-container w3-padding-16  w3-orange text-white">
                        <span className="w3-padding-16  w3-orange w3-text-white">Application Getion de magasin Relizane</span>
                    </div>
                    <ul className="w3-ul w3-hoverable w3-white">

                        <Menu list={menu} />
                    </ul>
                </div>
            </ul>
        </div>

    )

}



const Menu = ({ list }: any) => {

    return (
        list.map((item: any) => (
            <li key={item.id} className="w3-padding-16 w3-hover-grayscale">

                <Link  className="w3-margin" to={'menu/' + item.id}>
                    <img src={item.imguri} alt="Image" className="w3-left w3-margin-right  " style={{ width: '50px' }} />
                    <span className="w3-large w3-text-black"> {item.title}</span>
                    <br />
                    <span className="w3-text-gray">{item.tags}</span>
                </Link>
            </li>
        )))
}


export { Home, Menu }