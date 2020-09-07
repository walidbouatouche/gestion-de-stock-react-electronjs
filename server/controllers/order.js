

const CON = require('../config/sql.config');
const _response = require('../_helpers/_response')

exports.makeOrder = (req, res, next) => {

    const { giveBy, giveTo, Qty, orderedChilds } = req.body;

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



async function removeProductQty(orderedChilds) {


    await orderedChilds.forEach(element => {
        const QUERY = ` 
        UPDATE product SET
        productQty='productQty - ${element.qty}',
        nbrRemove='nbrRemove + element.qty '
        WHERE
        productId ='${element.productId}'
        `;

        CON.query(QUERY, (error, result) => {
            console.log(error)
            if (error) _response(res, 400, { message: 'invalidRequest' });
            
        })
    });




}