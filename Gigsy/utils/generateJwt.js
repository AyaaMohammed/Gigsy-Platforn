
const jwt = require('jsonwebtoken'); 

module.exports = async (payload)=>{
    var token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token
}