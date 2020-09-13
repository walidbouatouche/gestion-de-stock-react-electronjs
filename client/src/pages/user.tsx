import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../layout'
import { userAction } from '../redux/actions/user.action';


import { faEdit, faTrash, faPlus, faUser, faPrint, faEye, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Model from "../compenents/model";

const User = () => {
    const loading = useSelector((state: any) => state.user.loading);
    const users = useSelector((state: any) => state.user.users);
    const error = useSelector((state: any) => state.user.error);
    const dispatch = useDispatch();

    useEffect(() => {
        /*  
        getAllProducts
        
            */

        dispatch(userAction.getUsers())



    }, [])
 
    return (<Layout>


        <table  className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr style={{ border: "1px solid black" }} className="w3-red w3-text-white">
                <th>Ref</th>
                    <th>Name</th>
                    
                </tr>
            </thead>



            <tbody>
                {users && users.map((item: any) =>
                    <tr style={{ border: "1px solid black" }} key={item.userId} >
                        <th>{item.userId}</th>
                        <th>{item.name}</th>
                  
                       
 
                    </tr>
                )}
            </tbody>
        </table>
    </Layout>
    )

}




export default User