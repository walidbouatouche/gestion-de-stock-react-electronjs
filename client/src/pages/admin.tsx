import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { faEdit, faTrash, faPlus, faUser, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Model from "../compenents/model";
import Layout from '../layout'

import { productAction } from '../redux/actions/product.action';


import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const ProductAdmin = () => {
    const loading = useSelector((state: any) => state.product.loading);
    const products = useSelector((state: any) => state.product.products);
    const error = useSelector((state: any) => state.product.error);
    const dispatch = useDispatch();

    useEffect(() => {
        /*  
        getAllProducts
        
            */

        dispatch(productAction.getProducts())



    }, [])
    const _addProduct = (productData: any) => {

        delete productData.productId
        dispatch(productAction.addProduct(productData))

        // hide model of add page 
        let modelBox = document.getElementById("id01") as HTMLInputElement;
        modelBox.style.display = "none"

    }
    const _editProduct = (productData: any) => {
        dispatch(productAction.updateProduct(productData))

        // hide model of addpage
        let modelBox = document.getElementById(productData.productId) as HTMLInputElement;
        modelBox.style.display = "none"

    }
    const _deleteProduct = (id: any) => {
        if (window.confirm("Are You sure")) {

            dispatch(productAction.deleteProduct(id))

        }

    }
    return (
        <div  >
            <Layout>




                {products && <ProductList editProduct={_editProduct} deleteProduct={_deleteProduct} addProduct={_addProduct} allProducts={products} />
                }

            </Layout>
        </div>



    );

}






const ProductList = ({ allProducts, deleteProduct, addProduct, editProduct }: any) => {


    const _deleteProduct = (id: any) => {

        deleteProduct(id)
    }
    const _getProductInfo = (productData: any) => {
        addProduct(productData)
    }
    const _getProductInfoE = (productData: any) => {
        editProduct(productData)
    }
    const printProducts = () => {
        var divToPrint = document.getElementById("printTable") as HTMLInputElement;
      
        window.document.write(divToPrint.outerHTML);
        window.print();
        window.location.reload()
 
    }

    return (<>


        <div className="w3-margin w3-center" >
            <p>
                <Model id={'id01'} title={<FontAwesomeIcon icon={faPlus} />}>
                    <AddEditForm getProductInfo={_getProductInfo} />
                </Model>
            </p>
            <table className="w3-table-all w3-width w3-margin-top ">

                <thead>
                    <tr className="w3-red w3-text-white">
                        <th> product</th>
                        <th>Edit</th>
                        <th> Remove</th>
                        <th> quantité</th>
                    </tr>
                </thead>


                <tbody>
                    {allProducts.map((item: any) =>
                        <tr key={item.productId} >
                            <th>{item.productName}</th>
                            <th  >
                                <Model id={item.productId} title={<FontAwesomeIcon icon={faEdit} />}>
                                    {

                                        // I think that is not best practice to use her model  *_* !!!!


                                    }
                                    <AddEditForm getProductInfo={_getProductInfoE} productInfo={item} />                                </Model>


                            </th>
                            <th onClick={() => _deleteProduct(item.productId)} ><FontAwesomeIcon icon={faTrash} /></th>

                            {
                                // when click we copy direct  the users in model below 
                            }
                            <th>
                                <th>{item.productQty}</th>

                            </th>

                        </tr>
                    )}
                </tbody>
            </table>

 { 
 // only for print

 }
            <table    id="printTable" style={{border:"1px solid black"}}  className=" w3-hide">
  <p >
La listes des produis  
  </p>
<thead>
    <tr style={{border:"1px solid black"}}   >
        <th  style={{border:"1px solid black"}}>  product</th>
     
        <th  style={{border:"1px solid black"}}> quantité</th>
    </tr>
</thead>


<tbody>
    {allProducts.map((item: any) =>
        <tr  style={{border:"1px solid black"}}  key={item.productId} >
            <th  style={{border:"1px solid black"}}>{item.productName}</th>
       
          
                <th  style={{border:"1px solid black"}}>{item.productQty}</th>

         

        </tr>
    )}
</tbody>
</table>
{ 
 // only for print

 }
<br />
            <button onClick={printProducts} className="w3-button w3-green "><FontAwesomeIcon icon={faPrint} /> </button>
        </div>
 
    </>)
}



const AddEditForm = ({ productInfo, getProductInfo }: any) => {

    const [qty, setQty] = useState(productInfo?.productQty && productInfo.productQty)


    return (
        <div className="w3-center" >
            <div className="w3-col  m11 w3-margin-left w3-white w3-padding">
                <Formik
                    enableReinitialize
                    initialValues={{
                        productId: productInfo?.productId || '',
                        title: productInfo?.productName || '',
                        description: productInfo?.description || '',
                        Qty: 0


                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string()
                            .required('title is required'),

                        description: Yup.string()
                            .required('description is required'),
                        Qty: Yup.number()
                            .required('Qty is required')

                    })}
                    onSubmit={(fields): any => {

                        const newQty = (typeof qty === 'undefined') ? fields.Qty : fields.Qty + qty

                        getProductInfo({ ...fields, Qty: newQty })

                    }}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div >



                                <label htmlFor="title">Title</label>
                                <Field name="title" type="text" className={'w3-input w3-border' + (errors.title && touched.title ? ' w3-border w3-border-red' : '')} />
                                {errors.title && touched.title ? (<div className="w3-text-red">{errors.title}</div>) : null}
                                <br />
                            </div>

                            <div >
                                <label htmlFor="description">Description</label>
                                <Field name="description" rows="15" as="textarea" className={'w3-input w3-border' + (errors.description && touched.description ? ' w3-border w3-border-red' : '')} />
                                {errors.description && touched.description ? (<div className="w3-text-red">{errors.description}</div>) : null}
                                <br />                        </div>


                            <div >
                                <br />
                                <label htmlFor="Qty">Qty  actuel: {productInfo && qty} </label>< br />


                                + <Field name="Qty" type="number" className={'w3-input w3-border' + (errors.Qty && touched.Qty ? ' w3-border w3-border-red' : '')} >

                                </Field>

                                {errors.Qty && touched.Qty ? (<div className="w3-text-red">{errors.Qty}</div>) : null}

                                <br />
                            </div>




                            <div >
                                <button type="submit" className="w3-button w3-orange w3-text-white" >Save</button>
                                <button type="reset" className="w3-button w3-gray w3-margin w3-text-white">Reset</button>
                            </div>



                        </Form>
                    )}
                />
            </div>



        </div>)
}





export { ProductAdmin, ProductList, AddEditForm }