
// for Auth you can add it in all routes
const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
const AUTH = require('../_helpers/auth') // test if login
const productCtrl = require('../controllers/product')
ROUTER.get('/getproductbyid/:productId', productCtrl.getOffreById)
module.exports = ROUTER;




