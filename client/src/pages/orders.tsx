import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../layout'
import { orderAction } from '../redux/actions/order.action';


import { faEdit, faTrash, faPlus, faUser, faPrint, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Model from "../compenents/model";
import { order } from '../redux/reducers/order.reducer';
import { start } from 'repl';

const Orders = () => {

    const loading = useSelector((state: any) => state.order.loading);
    const orders = useSelector((state: any) => state.order.orders);
    const error = useSelector((state: any) => state.order.error);
    const [_orders, setOrders] = useState([])
    const [action, setAction] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        /*  
        getAllProducts
        
            */

        dispatch(orderAction.getOrders())



    }, [])

    const printOrder = () => {

        [].forEach.call(document.querySelectorAll('.noPrint'), (el: any) => {
            el.style.visibility = 'hidden';
        });

        window.print();
        [].forEach.call(document.querySelectorAll('.noPrint'), (el: any) => {
            el.style.visibility = 'visible';
        });

        window.print();


    }

    const filterByUser = (event: any) => {
        console.log(orders)
        const byUser = orders.filter((element: any) => element.giveTo === event.target.value);
      setOrders(byUser)

    }

    const rest = () => {


        setOrders(orders)
     

    }

    const getByDate = (action: any) => {
     
        const d = new Date();
        const date = d.getDate();
        const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        const year = d.getFullYear();
         
        const dateStr = date + "/" + month + "/" + year;
    

        
   switch (action) {
       case "d":{
        const byDate = orders.filter((o:any) => String(o.addAtDay).startsWith(dateStr));
        console.log(byDate)
        setOrders(byDate)
        break;
  
       }
       case "m":{
        const byDate = orders.filter((o:any) => String(o.addAtDay).endsWith(month + "/" + year));
        console.log(byDate)
        setOrders(byDate)
        break;

       }
       case "y":{

        const byDate = orders.filter((o:any) => String(o.addAtDay).endsWith( "/" + year));
        console.log(byDate)
        setOrders(byDate)
        break;

       }
           
          
   
       default:
           break;
   }
    }
    const deleteOrder = (orderInfo: any, orderedChilds: any) => {
        const childs = JSON.parse(orderedChilds)
        delete orderInfo.orderedChilds;
        const _orderedId = orderInfo.orderedId


        let _order_orderedChilds = JSON.stringify({ _orderedId, childs })


        dispatch(orderAction.deleteOrder(_order_orderedChilds))

      rest()
      let orderLine = document.getElementById( _orderedId) as HTMLInputElement;
      orderLine.style.display = "none"
      
        

    }
    return (<Layout>

        <input type="text" placeholder=" filter by user " onChange={filterByUser} />
        <button onClick={rest}>Refrecher</button>
        <button onClick={() => getByDate('m')}> commande de cette mois </button>
        <button onClick={() => getByDate('d')}> commande de jour </button>
        <button onClick={() => getByDate('y')}> commande de cette anee </button>
        <table className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr style={{ border: "1px solid black" }} className="w3-red w3-text-white">
                    <th>Ref</th>
                    <th> A</th>
                    <th> Par</th>
                    <th> Vu</th>
                    <th>x</th>
                </tr>
            </thead>



            <tbody>
                {_orders && _orders.map((item: any) =>
                    <tr style={{ border: "1px solid black" }} id={item.orderedId}  key={item.orderedId} >
                        <th>{item.orderedId}</th>

                        <th>{item.giveTo}</th>
                        <th>{item.giveBy}</th>
                        <th>

                            <Model id={item.orderedId+"-"} title={<FontAwesomeIcon icon={faEye} />}>
                                <br />

                                <div id="printTable" >
                                    <table style={{ border: "1px solid black" }} className="w3-table-all w3-width   ">

                                        <thead>
                                            <tr className="w3-red w3-text-white">
                                                <th style={{ border: "1px solid black" }} > product</th>
                                                <th style={{ border: "1px solid black" }} > quantité</th>

                                            </tr>


                                        </thead>


                                        <tbody>
                                            {item.orderedChilds && JSON.parse(item.orderedChilds).map((item: any) =>
                                                <tr key={item.productId}  >
                                                    <th style={{ border: "1px solid black" }}  >{item.productName}</th>

                                                    <th style={{ border: "1px solid black" }} >
                                                        {item.productQty}
                                                    </th>

                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <p>
                                        {item.addAtDay} {""}{item.addAtTime} <br />

    A: {item.giveTo} <br />
    Par:{item.giveBy}
                                    </p>
                                    <button onClick={printOrder} className="w3-button w3-green  noPrint">  <FontAwesomeIcon icon={faPrint} /></button>
                                </div>
                            </Model>
                        </th>
                        <th onClick={() => deleteOrder(item, item.orderedChilds)} className="noPrint" style={{ border: "1px solid black" }}  ><FontAwesomeIcon icon={faTrash} /> </th>

                    </tr>
                )}
            </tbody>
        </table>
    </Layout>
    )

}




export default Orders