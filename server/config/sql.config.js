// connect to Database
const mysql = require('mysql');
const serverInfo = {
host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stock'
}

const con = mysql.createConnection(serverInfo);
con.connect((errors) => {
    if (errors)  {console.log("Errer !"); return false ;}
    console.log("Connected !");

})


module.exports = con 