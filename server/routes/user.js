const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
 
const userCtrl = require('../controllers/user')

ROUTER.get('/getproductbyid/:productId',userCtrl.getUsers)

module.exports = ROUTER;