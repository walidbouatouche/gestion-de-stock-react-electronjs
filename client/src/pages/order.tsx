import React, { useState , useEffect} from 'react'
import Layout from '../layout'
import {   faPrint, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productAction } from '../redux/actions/product.action';
import { orderAction} from '../redux/actions/order.action';
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../redux/actions/user.action';
const Order = () => {
   


    const [orderList, setOrderList] = useState([{}])
    const [currentProduct, setCurrentProduct] = useState({})
    const [selectedQty, setSelectedQty] = useState(0)
    const [giveBy, setGiveBy] = useState('Societé:"magasin"')
    const [ giveTo,setGiveTo] = useState('')
    const [ today,setToday] = useState('')
    const loading = useSelector((state: any) => state.product.loading);
    const products = useSelector((state: any) => state.product.products);
    const error = useSelector((state: any) => state.product.error);
    const orderAdded = useSelector((state: any) => state.order.orderAdded);
    const users = useSelector((state: any) => state.user.users);

    const dispatch = useDispatch();


    useEffect(()=>{

        const d = new Date();
        const date = d.getDate();
        const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        const year = d.getFullYear();
         
        const dateStr = date + "/" + month + "/" + year;
    
        setToday(dateStr)

        dispatch(productAction.getProducts())



        // just for resolve bug 
        let newOrderList= Object.assign([],orderList)
        const  index = newOrderList.findIndex((p:any )=> p.productId ==="0");
         
        
        newOrderList.splice(index,1)
        setOrderList(newOrderList)
        
        // just for resolve bug 

        dispatch(userAction.getUsers())

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


    [].forEach.call(document.querySelectorAll('.noPrint'), (el:any)=> {
        el.style.visibility = 'hidden';
      });

      let head = document.getElementById("head") as HTMLInputElement;
    head.style.display = "none"
    window.print();
    [].forEach.call(document.querySelectorAll('.noPrint'), (el:any)=> {
        el.style.visibility = 'visible';
      });
  
      head.style.display = "block"

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
                      users={users}
                      today={today}

                      />}
 
                      <button  onClick={printOrder}className="w3-button w3-red  noPrint">  <FontAwesomeIcon icon={faPrint} /></button>


        </Layout>
          
    </div>)

}


const OrderList = ({ today,users, _getSelectedQty,_getGiveBy, _getGiveTo,_getCurrentProduct,allProducts ,orderListItems ,_addItem ,_removeItem ,_makeOrder}: any) => {


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
           <p className="w3-buttom">
{today}
    </p>
<br />
Donne a : 

<select onChange={getGiveTo} >
<option>
------
    </option>
   
    {users && users.map((item: any) =>
     <option   key={item.userId} value={item.name} >
       {       item.name}
                       
                        </option>
                )}
 
 
    
     </select>  
      

   

        <div style={{float:"right"}}>
        Par :  
     
   <select disabled={true} onChange={getGiveBy} >

        <option value={"admin"}>
        Societé:"magasin"
    </option>
   

        </select>

        </div>
<hr/>
<div id="head">


<p className="noPrint">
Choisez le produit:
    </p>
<select  className="noPrint"  onChange={getCurrentProduct}>
<option>
------
    </option>

{allProducts.map((item:any)=>    
                  
                  <option    key={item.productId} value={item.productId}>{item.productName}</option>)

              }     
    </select>
<p className="noPrint">
Choisez quantité
    </p>
<input className="noPrint"  type="number" onChange={getSelectedQty}  />
<button   onClick={addItem} className="w3-margin w3-padding noPrint"  > Add </button>
 
<hr/>
</div>
        <table  style={{ border: "1px solid black" }} className="w3-table-all w3-width w3-margin-top ">

            <thead>
                <tr className="w3-red w3-text-white">
                    <th style={{ border: "1px solid black" }} > product</th>
                    <th style={{ border: "1px solid black" }} > quantité</th>
                    <th  className="noPrint" style={{ border: "1px solid black" }} > Delete</th>
                </tr>
            </thead>


            <tbody>
                {orderListItems.map((item: any) =>
                    <tr key={item.productId} >
                        <th style={{ border: "1px solid black" }}  >{item.productName}</th>
                      
                        <th style={{ border: "1px solid black" }} >
                            {item.productQty}
                        </th>
                        <th  className="noPrint"  style={{ border: "1px solid black" }} onClick={()=>removeItem(item.productId)}> <FontAwesomeIcon icon={faTrash} /></th>

                    </tr>
                )}
            </tbody>
        </table>

<div className="w3-center">
    <br />
<button    onClick={makeOrder} className="w3-button w3-red noPrint">  <FontAwesomeIcon icon={faSave} /></button>

    </div>
 
    </div>)

}


export { Order, OrderList }