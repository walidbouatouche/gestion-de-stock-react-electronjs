
// for Auth you can add it in all routes
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const productCtrl = require('../controllers/product')
ROUTER.get('/getproductbyid/:productId', productCtrl.getProductById)
ROUTER.get('/getproducts/', productCtrl.getProducts)
ROUTER.post('/addproduct/', productCtrl.addProduct)
module.exports = ROUTER;




