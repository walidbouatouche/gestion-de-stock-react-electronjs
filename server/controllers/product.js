// connect to SQL
const CON = require('../config/sql.config');
const _response = require('../_helpers/_response')
exports.getOffreById = (req, res, next) => {

    const { productId } = req.params;
    const QUERY = `SELECT * FROM product WHERE productId=${productId} `
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' });


        _response(res, 200, result)
    })
}
