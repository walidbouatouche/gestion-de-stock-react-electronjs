
 
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
 
const productCtrl = require('../controllers/product')
ROUTER.get('/getproductbyid/:productId', productCtrl.getProductById)
ROUTER.get('/getproducts/', productCtrl.getProducts)
ROUTER.post('/addproduct/', productCtrl.addProduct)
ROUTER.delete('/deleteproduct/:productId', productCtrl.deleteProduct)
ROUTER.put('/editproduct/', productCtrl.updateProduct)

module.exports = ROUTER;




