import React, { useState, useEffect } from 'react'
import menu from '../static/menu.json'
import { Link } from 'react-router-dom'
import { productAction } from '../redux/actions/product.action';

import { useSelector, useDispatch } from 'react-redux'
const Home = () => {

    const  loading= useSelector( (state: any) => state.product. loading);
    const productById = useSelector( (state: any) => state.product.productById);
    const  error= useSelector( (state: any) => state.product. error);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productAction.getProductByid(1))
        

    }, [])

    return (
        <div className="w3-white w3-margin">

            <ul className="w3-ul w3-hoverable w3-white">
                <div className="w3-white w3-margin">
                    <div className="w3-container w3-padding-16  w3-orange text-white">
                        <span className="w3-padding-16  w3-orange w3-text-white">Offres d'emploi par fonction</span>
                    </div>
                    <ul className="w3-ul w3-hoverable w3-white ">

                        <Menu menu={menu} />
                    </ul>
                </div>
            </ul>
                        
                        
           {  productById && productById[0].productId }
           {  loading && "loading" }
            
           {  error &&  error }
        
        </div>

    )

}



const Menu = ({ menu }: any) => {

    return (
        menu.map((item: any) => (
            <li key={item.id} className="w3-padding-16 w3-margin  w3-hover-grayscale">

                <Link className="w3-padding" to={'list/' + item.id}>
                    <img src={item.imguri} alt="Image" className="w3-left w3-margin-right  " style={{ width: '50px' }} />
                    <span className="w3-large w3-text-black"> {item.title}</span>
                    <br />
                    <span className="w3-text-gray">{item.tags}</span>
                </Link>
            </li>
        )))
}


export { Home, Menu }