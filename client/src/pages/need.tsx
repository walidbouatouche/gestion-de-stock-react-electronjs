import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../layout'
import { productAction } from '../redux/actions/product.action';



const NeedProduct=()=>{
    const loading = useSelector((state: any) => state.product.loading);
    const products = useSelector((state: any) => state.product.productsNeed);
    const error = useSelector((state: any) => state.product.error);
    const dispatch = useDispatch();

    useEffect(() => {
        /*  
        getAllProducts
        
            */

        dispatch(productAction.getProductsNeed())



    }, [])

    const printList =()=>{
        let modelBox = document.getElementById("print") as HTMLInputElement;
        modelBox.style.display = "none"
        window.print();
        window.location.reload(false)
 


    }
return(<Layout>


<table  id="printTable" className="w3-table-all w3-width w3-margin-top ">

<thead>
    <tr  style={{border:"1px solid black"}}  className="w3-red w3-text-white">
        <th> les products manqueé</th>
        
     
    </tr>
</thead>


<tbody>
    {products && products.map((item: any) =>
        <tr  style={{border:"1px solid black"}}  key={item.productId} >
            <th>{item.productName}</th>
          
        </tr>
    )}
</tbody>
</table>
<br/>
<button  id="print" onClick={printList} className="w3-button w3-red">Imprimer la liste</button>
</Layout>
)

}




export default NeedProduct