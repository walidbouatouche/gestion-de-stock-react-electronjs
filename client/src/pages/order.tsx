import React, { useState } from 'react'
import Layout from '../layout'
import {   faPrint, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Order = () => {

    const [orderList, setOrderList] = useState([{
        productId: 1,
        productName: 'book',
        qty: 20

    }])

    const addItem=()=>{
 
let newOrderList= Object.assign([],orderList)
newOrderList.push({
    productId: 2,
    productName: 'boo32',
    qty: 200

})
 
setOrderList(newOrderList)


    }



const removeItem=(productId:any)=>{
    if(window.confirm("Vous ete sure")){

     
        let newOrderList= Object.assign([],orderList)
       const  index = newOrderList.findIndex((p:any )=> p.productId ===productId);
        
       
       newOrderList.splice(index,1)
       setOrderList(newOrderList)
    
        }
}



const makeOrder=()=>{
    if(window.confirm("Vous ete sure")){


    }



}
    return (<div >

        <Layout>

            {
                orderList &&
                
                <OrderList orderListItems={orderList}  _removeItem={removeItem} _addItem={addItem}  _makeOrder={makeOrder} />}

        </Layout>
    </div>)

}


const OrderList = ({ orderListItems ,_addItem ,_removeItem ,_makeOrder}: any) => {

    const addItem=()=>{
        _addItem()

    }
    const makeOrder=()=>{
        _makeOrder()

    }
const removeItem=(productId:any)=>{

    _removeItem(productId)
}
    return (<div>
<br />
Donne a : <select>
    
    <option>
        walid
    </option>
    <option>
        walid
    </option>
     </select>  
      

   

        <div style={{float:"right"}}>
        Par     :  
     
        <select>
    
        <option>
        walid
    </option>
    <option>
        mohamed
    </option>

        </select>

        </div>
<hr/>
Choisez le produit:
<input type="text"  />
Choisez quantité
<input type="number" />
<button onClick={addItem} className="w3-margin w3-padding"  > Add </button>
Refrence
<input disabled={true } />
<hr/>
        <table className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr className="w3-red w3-text-white">
                    <th> product</th>
                    <th> quantité</th>
                    <th> Delete</th>
                </tr>
            </thead>


            <tbody>
                {orderListItems.map((item: any) =>
                    <tr key={item.productId} >
                        <th>{item.productName}</th>
                      
                        <th >
                            {item.qty}
                        </th>
                        <th onClick={()=>removeItem(item.productId)}> <FontAwesomeIcon icon={faTrash} /></th>

                    </tr>
                )}
            </tbody>
        </table>
<div className="w3-center">
    <br />
<button  onClick={makeOrder} className="w3-button w3-green "><FontAwesomeIcon icon={faPrint} /> / <FontAwesomeIcon icon={faSave} /></button>

    </div>

    </div>)

}


export { Order, OrderList }