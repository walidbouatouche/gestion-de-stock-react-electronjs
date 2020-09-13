const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();
 
const userCtrl = require('../controllers/user')

ROUTER.get('/getusers/',userCtrl.getUsers)

module.exports = ROUTER;