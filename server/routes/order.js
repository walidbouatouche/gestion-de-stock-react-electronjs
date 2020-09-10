const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
 
const orderCtrl = require('../controllers/order')

ROUTER.post('/makeorder/', orderCtrl.makeOrder)
ROUTER.get('/getorders/', orderCtrl.getOrders)
module.exports = ROUTER;