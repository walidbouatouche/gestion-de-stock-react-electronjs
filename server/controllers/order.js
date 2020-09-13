

const CON = require('../config/sql.config');
const _response = require('../_helpers/_response');
const { json } = require('body-parser');

exports.makeOrder = (req, res, next) => {



  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  const year = d.getFullYear();
  const H = d.getHours();
  const M = d.getMinutes();

  const dateStr = date + "/" + month + "/" + year;
  const timeNow = H + ":" + M
  const { giveBy, giveTo, orderedChilds } = req.body;
  const addAtDay = dateStr;
  const addAtTime = timeNow;

  console.log(req.body)


  removeProductQty(orderedChilds)

  const QUERY = `
    INSERT INTO
      ordered
      ( orderedId,
        giveBy ,
        giveTo,
        addAtDay,
        addAtTime,
        orderedChilds 
       
        )
        VALUES 
      ('', 
        '${giveBy}',
        '${giveTo}',
        '${addAtDay}',
        '${addAtTime}',
        '${orderedChilds}'
          ) `;

  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });


    _response(res, 200, result)
  })
}



function removeProductQty(orderedChilds) {


  JSON.parse(orderedChilds).forEach(element => {
    console.log(element)
    const QUERY = ` 
        UPDATE product SET
        productQty=productQty - '${element.productQty}',
        nbrRemove=nbrRemove +'${element.productQty}'
        WHERE
        productId ='${element.productId}'
        `;

    CON.query(QUERY, (error, result) => {
      console.log(error)
      if (error) _response(res, 400, { message: 'invalidRequest' });

    })
  });




}





exports.getOrders = (req, res, next) => {


  const QUERY = `SELECT * FROM  ordered ORDER BY   orderedId DESC`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, result)
  })
}







exports.deleteOrder = (req, res, next) => {


  const { order_orderedChilds } = req.params;

  const _order_orderedChilds = JSON.parse(order_orderedChilds)

 console.log(_order_orderedChilds)

   recieveProductQty(_order_orderedChilds.childs)

  const QUERY = `
 delete
 from ordered
  where orderedId='${_order_orderedChilds._orderedId}'
  
  `;

  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });


    _response(res, 200, result)
  })
}



function recieveProductQty(orderedChilds) {


  orderedChilds.forEach(element => {
    console.log(element)
    const QUERY = ` 
      UPDATE product SET
      productQty=productQty + '${element.productQty}',
      nbrRemove=nbrRemove -'${element.productQty}'
      WHERE
      productId ='${element.productId}'
      `;

    CON.query(QUERY, (error, result) => {
      console.log(error)
      if (error) _response(res, 400, { message: 'invalidRequest' });

    })
  });
}



exports.getOrdersByUser = (req, res, next) => {

  const { giveTo } = req.params

  const QUERY = `SELECT * FROM  ordered  where  giveTo='${giveTo} ORDER BY   orderedId DESC`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, result)
  })
}