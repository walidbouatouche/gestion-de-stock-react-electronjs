
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const productCtrl = require('../controllers/product')

ROUTER.get('/getproductbyid/:productId', productCtrl.getProductById)
ROUTER.get('/getproducts/', productCtrl.getProducts)
ROUTER.get('/getproductsneed/', productCtrl.getProductsNeed)


ROUTER.post('/addproduct/', productCtrl.addProduct)


ROUTER.put('/editproduct/', productCtrl.updateProduct)

ROUTER.delete('/deleteproduct/:productId', productCtrl.deleteProduct)


module.exports = ROUTER;




