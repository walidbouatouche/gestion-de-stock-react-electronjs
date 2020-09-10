import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../layout'
import { orderAction } from '../redux/actions/order.action';


import { faEdit, faTrash, faPlus, faUser, faPrint, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Model from "../compenents/model";

const Orders = () => {
    const loading = useSelector((state: any) => state.order.loading);
    const orders = useSelector((state: any) => state.order.orders);
    const error = useSelector((state: any) => state.order.error);
    const dispatch = useDispatch();

    useEffect(() => {
        /*  
        getAllProducts
        
            */

        dispatch(orderAction.getOrders())



    }, [])

    const printOrder=()=>{

        // var divToPrint = document.getElementById("printTable") as HTMLInputElement;
          
        // window.document.write(divToPrint.outerHTML);
        window.print();
        window.location.reload()
    
    }
    return (<Layout>


        <table  className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr style={{ border: "1px solid black" }} className="w3-red w3-text-white">
                    <th>ref</th>
                    <th> a:</th>
                    <th> par:</th>
                    <th> plus</th>
                </tr>
            </thead>



            <tbody>
                {orders && orders.map((item: any) =>
                    <tr style={{ border: "1px solid black" }} key={item.orderedId} >
                        <th>{item.orderedId}</th>

                        <th>{item.giveTo}</th>
                        <th>{item.giveBy}</th>
                        <th>

                            <Model id={item.orderedId} title={<FontAwesomeIcon icon={faEye} />}>
<br />

                          <div id="printTable" >   
                            <table  style={{ border: "1px solid black" }} className="w3-table-all w3-width   ">

<thead>
    <tr className="w3-red w3-text-white">
        <th style={{ border: "1px solid black" }} > product</th>
        <th style={{ border: "1px solid black" }} > quantité</th>

    </tr>
   

</thead>


<tbody>
    {JSON.parse(item.orderedChilds).map((item: any) =>
        <tr key={item.productId} >
            <th style={{ border: "1px solid black" }}  >{item.productName}</th>
          
            <th style={{ border: "1px solid black" }} >
                {item.productQty}
            </th>
 
        </tr>
    )}
</tbody>
</table>
<p>
    {item.addAtDay} {""}{item.addAtTime} <br/>

    A: {item.giveTo} <br/>
    Par:{item.giveBy}
    </p>
    <button  onClick={printOrder}className="w3-button w3-green ">  <FontAwesomeIcon icon={faPrint} /></button>
</div>
                            </Model>
                        </th>
                    </tr>
                )}
            </tbody>
        </table>
    </Layout>
    )

}




export default Orders