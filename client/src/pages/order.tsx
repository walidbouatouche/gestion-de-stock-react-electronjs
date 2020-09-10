import React, { useState , useEffect} from 'react'
import Layout from '../layout'
import {   faPrint, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productAction } from '../redux/actions/product.action';
import { orderAction} from '../redux/actions/order.action';
import { useSelector, useDispatch } from 'react-redux'
const Order = () => {
   


    const [orderList, setOrderList] = useState([{}])
    const [currentProduct, setCurrentProduct] = useState({})
    const [selectedQty, setSelectedQty] = useState(0)
    const [giveBy, setGiveBy] = useState('')
    const [ giveTo,setGiveTo] = useState('')
    const [ today,setToday] = useState('')
    const loading = useSelector((state: any) => state.product.loading);
    const products = useSelector((state: any) => state.product.products);
    const error = useSelector((state: any) => state.product.error);
    const dispatch = useDispatch();
    const orderAdded = useSelector((state: any) => state.order.orderAdded);


    useEffect(()=>{


        dispatch(productAction.getProducts())



        // just for resolve bug 
        let newOrderList= Object.assign([],orderList)
        const  index = newOrderList.findIndex((p:any )=> p.productId ==="0");
         
        
        newOrderList.splice(index,1)
        setOrderList(newOrderList)
        
        // just for resolve bug 

    },[])

    const addItem=()=>{
    
let newOrderList= Object.assign([],orderList)
 const {productId,productName,productQty}:any=currentProduct
 const  index = newOrderList.findIndex((p:any )=> p.productId ===productId);
if(index > -1){

alert('Supprimer le produit et ajouter une autre quantité')
return false

}

 if(selectedQty >productQty ) {

    alert(" La quantité demandée est inférieure à celle existante")
    return false
 }

 let productQty_=selectedQty

 let p ;
  p= {
    productId : productId,
    productName: productName,
    productQty: productQty_
 }
 
 newOrderList.push(p)
 
 setOrderList(newOrderList)


    }



const removeItem=(productId:any)=>{
    if(window.confirm("Vous Êtes-vous sûr")){

     
        let newOrderList= Object.assign([],orderList)
       const  index = newOrderList.findIndex((p:any )=> p.productId ===productId);
        
       
       newOrderList.splice(index,1)
       setOrderList(newOrderList)
    
        }
}
 

const getCurrentProduct=(product:any)=>{
   
    setCurrentProduct(product)
   
  
}
const makeOrder=()=>{
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const year = d.getFullYear();
     
    const dateStr = date + "/" + month + "/" + year;

    setToday(dateStr)
const orderedChilds=JSON.stringify(orderList) ;
  
    if(window.confirm("Vous Êtes-vous sûr")){
        dispatch(orderAction.addOrder({orderedChilds,giveBy,giveTo}))


    }


}
const getGiveBy=(name:any)=>{
  
    setGiveBy(name)

}
const getGiveTo=(name:any)=>{
   
    setGiveTo(name)

}
const getSelectedQty=(qty:any)=>{
    setSelectedQty(qty)

}

const printOrder=()=>{

    var divToPrint = document.getElementById("printTable") as HTMLInputElement;
      
    window.document.write(divToPrint.outerHTML);
    window.print();
    window.location.reload()

}
    return (<div >

        <Layout>

            {
                products &&
                
                <OrderList
                  _getCurrentProduct={getCurrentProduct} 
                  orderListItems={orderList}
                   allProducts={products} 
                   _removeItem={removeItem}
                    _addItem={addItem}
                    _makeOrder={makeOrder}
                      _getGiveBy={getGiveBy}
                      _getGiveTo={getGiveTo}
                      _getSelectedQty={ getSelectedQty}
                      

                      />}
 
                      <button  onClick={printOrder}className="w3-button w3-green ">  <FontAwesomeIcon icon={faPrint} /></button>


        </Layout>
        { // just for print order
        
        }
        <div  id="printTable" style={{border:"1px solid black"}} className=" w3-hide">
        <table    style={{marginRight:"auto",marginLeft:"auto",border:"1px solid black"}} >
  <p style={{marginRight:"auto",marginLeft:"auto"}} >
<h1 style={{padding:"20px" , border:"2px solid dotted",marginRight:"auto",marginLeft:"auto"}}> Bon commande </h1>
  </p>
<thead>
    <tr style={{border:"1px solid black"}}   >
        <th  style={{border:"1px solid black"}}>  Product</th>
     
        <th  style={{border:"1px solid black"}}> Quantité</th>
    </tr>
</thead>
<tbody>
    {orderList && orderList.map((item: any) =>
        <tr  style={{border:"1px solid black"}}  key={item.productId} >
            <th  style={{border:"1px solid black"}}>{item.productName}</th>
       
          
                <th  style={{border:"1px solid black"}}>{item.productQty}</th>

         

        </tr>
    )}
</tbody>
        par:<b>{giveBy}</b>
        <br  />
       a:<b>{giveTo}</b>
       <br />
       le :<b>{today} </b>
</table>
<br />
</div> 
    </div>)

}


const OrderList = ({ _getSelectedQty,_getGiveBy, _getGiveTo,_getCurrentProduct,allProducts ,orderListItems ,_addItem ,_removeItem ,_makeOrder}: any) => {


    const addItem=()=>{
        _addItem()

    }
    const makeOrder=()=>{
        _makeOrder()

    }
const removeItem=(productId:any)=>{

    _removeItem(productId)
}
const getCurrentProduct=(event:any)=>{
 
    const product=allProducts.find((x:any) => x.productId == event.target.value);
    _getCurrentProduct(product)

}

const getGiveTo=(event:any)=>{
_getGiveTo(event.target.value)
}
const getGiveBy=(event:any)=>{
    _getGiveBy(event.target.value)
    }
    
   const  getSelectedQty=(event:any)=>{
    _getSelectedQty(event.target.value)
    }
    return (<div>
<br />
Donne a : 

<select onChange={getGiveTo} >
<option>
------
    </option>
    <option  value={"user"} >
        user
    </option>
 
    
     </select>  
      

   

        <div style={{float:"right"}}>
        Par :  
     
   <select onChange={getGiveBy} >
   <option>
------
    </option>
        <option value={"admin"}>
        admin
    </option>
   

        </select>

        </div>
<hr/>
Choisez le produit:
 
<select  onChange={getCurrentProduct}>
<option>
------
    </option>

{allProducts.map((item:any)=>    
                  
                  <option    key={item.productId} value={item.productId}>{item.productName}</option>)

              }     
    </select>
Choisez quantité
<input type="number" onChange={getSelectedQty}  />
<button onClick={addItem} className="w3-margin w3-padding"  > Add </button>
 
<hr/>
        <table  style={{ border: "1px solid black" }} className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr className="w3-red w3-text-white">
                    <th style={{ border: "1px solid black" }} > product</th>
                    <th style={{ border: "1px solid black" }} > quantité</th>
                    <th style={{ border: "1px solid black" }} > Delete</th>
                </tr>
            </thead>


            <tbody>
                {orderListItems.map((item: any) =>
                    <tr key={item.productId} >
                        <th style={{ border: "1px solid black" }}  >{item.productName}</th>
                      
                        <th style={{ border: "1px solid black" }} >
                            {item.productQty}
                        </th>
                        <th  style={{ border: "1px solid black" }} onClick={()=>removeItem(item.productId)}> <FontAwesomeIcon icon={faTrash} /></th>

                    </tr>
                )}
            </tbody>
        </table>

<div className="w3-center">
    <br />
<button  onClick={makeOrder} className="w3-button w3-green ">  <FontAwesomeIcon icon={faSave} /></button>

    </div>

    </div>)

}


export { Order, OrderList }