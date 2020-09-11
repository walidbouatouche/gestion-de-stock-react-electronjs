const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
 
const orderCtrl = require('../controllers/order')

ROUTER.post('/makeorder/', orderCtrl.makeOrder)
ROUTER.get('/getorders/', orderCtrl.getOrders)
ROUTER.get('/getordersbyuser/:giveTo', orderCtrl.getOrdersByUser)
ROUTER.delete('/deleteorder/:order_orderedChilds', orderCtrl.deleteOrder)
module.exports = ROUTER;