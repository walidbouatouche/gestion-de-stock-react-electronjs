import React from 'react'
import Layout from '../layout'

//The main layout that appears on all pages

import { faEdit, faTrash, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Model from "../compenents/model";


 
import { Formik, Field, Form  } from 'formik';
import * as Yup from 'yup';

const ProductAdmin = () => {
    return (
        <div>
            <Layout>

                <ProductList />

            </Layout>
        </div>



    );

}






const ProductList = () => {


    return (<>

        <Model id={'id01'} title={<FontAwesomeIcon icon={faPlus} />}>
            <AddEditForm />
        </Model>

        <div className="w3-margin">
            <p>Add Model </p>
            <table className="w3-table-all w3-width w3-margin-top w3-margin">

                <thead>
                    <tr className="w3-orange w3-text-white">
                        <th> product</th>
                        <th>Edit</th>
                        <th> Remove</th>

                    </tr>
                </thead>
                <tbody>

                    <tr  >
                        <th> </th>
                        <th  >



                        </th>
                        <th   > X</th>

                        {
                            // when click we copy direct  the users in model below 
                        }


                    </tr>

                </tbody>
            </table>
        </div>
    </>)
}



const AddEditForm = ({product}:any) => {

    return ( 
 <div className="w3-center" >
 <div className="w3-col  m11 w3-margin-left w3-white w3-padding">
                  <Formik
                enableReinitialize
                initialValues={{
                    productId:product?.productId || '' ,
                    title: product?.title || '',
                    description: product?.description || '',
                    Qty:product?.Qty  ||  1
                  
                    
                }}
                validationSchema={Yup.object().shape({
                title: Yup.string()
                .required('title is required'),
            
                description: Yup.string()
                .required('description is required'),
                Qty: Yup.number()
                .required('Qty is required')
                
                })}
                onSubmit={(fields) :any=> {
           
                        
                  alert(JSON.stringify(fields))
                  
                            
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                        
                     
                  
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className={'w3-input w3-border' + (errors.title && touched.title? ' w3-border w3-border-red' : '')} />
                            {errors.title && touched.title ? (<div className="w3-text-red">{errors.title}</div>) : null}
                            <br />
                        </div>
                         
                        <div >
                            <label htmlFor="description">Description</label>
                            <Field name="description"  rows="15" as="textarea" className={'w3-input w3-border' + (errors.description && touched.description ? ' w3-border w3-border-red' : '')} />
                            {errors.description && touched.description? (<div className="w3-text-red">{errors.description}</div>) : null}
                         <br />                        </div>
                

                                <div >
                                <br />  
                            <label htmlFor="Qty">Qty  actuel: 10  </label>< br />
                            <label htmlFor="Qty">  new Qty </label>

                            <Field name="Qty" type="number"   className={'w3-input w3-border' + (errors.Qty && touched.Qty ? ' w3-border w3-border-red' : '')} >
                            
                               </Field>

                            {errors.Qty && touched.Qty ? (<div className="w3-text-red">{errors.Qty}</div>) : null}

                                  <br />                      
                                </div>

 
                           
                           
                                <div >
                            <button type="submit"     className="w3-button w3-orange w3-text-white" >Save</button>
                            <button type="reset"    className="w3-button w3-gray w3-margin w3-text-white">Reset</button>
                        </div> 
                  
                        

                    </Form>
                )}
            />
        </div>
    


    </div>)
}





export { ProductAdmin, ProductList , AddEditForm}