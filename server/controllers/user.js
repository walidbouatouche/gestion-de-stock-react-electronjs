const CON = require('../config/sql.config');
const jwt = require('jsonwebtoken'); // token for login
const _response = require('../_helpers/_response')
// const nodemailer = require('nodemailer').mail;


exports.getUsers = (req, res, next) => {

    const QUERY = `SELECT * FROM user `
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' });
        _response(res, 200, result)
    })
}
