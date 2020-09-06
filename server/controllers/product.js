// connect to SQL
const CON = require('../config/sql.config');
const _response = require('../_helpers/_response')
exports.getProductById = (req, res, next) => {

    const { productId } = req.params;
    const QUERY = `SELECT * FROM product WHERE productId=${productId} `
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' });


        _response(res, 200, result)
    })
}

exports.getProducts = (req, res, next) => {

    const { productId } = req.params;
    const QUERY = `SELECT * FROM product `
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' });
        _response(res, 200, result)
    })
}


exports.addProduct = (req, res, next) => {

    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const year = d.getFullYear();
    const  H = d.getHours();
    const M =d.getMinutes();

    const dateStr = date + "/" + month + "/" + year;
    const timeNow=H+":"+M
    const { title, description, Qty } = req.body;
 

const lastUpdate =	 dateStr +" "+timeNow
const productName =	 title;
const productQty = Qty;
const productAddBy =0
const addAtDay = dateStr;
const addAtTime = timeNow ;
const nbrRemove =0
    const QUERY = `
    INSERT INTO
      product
      ( productId,
        lastUpdate ,
        productName,
        productQty,
        description,
        productAddBy,
        addAtDay,
        addAtTime,
        nbrRemove
       
        )
        VALUES 
      ('', 
        '${lastUpdate}',
        '${productName}',
        '${productQty}',
        '${description}',
        '${productAddBy}',
        '${addAtDay}',
        '${addAtTime}',
        '${nbrRemove}'
          ) `;
    CON.query(QUERY, (error) => {
        if (error) {
            _response(res, 400, { message: 'invalidRequest' })
        }
        _response(res, 200, { message: " succefully !!" })


    })

}
