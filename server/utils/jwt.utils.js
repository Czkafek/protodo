const { sign, verify } = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const generateAccessToken = (user) => {
    const privateKey = fs.readFileSync(path.join(__dirname, '../priv.pem'), 'utf8');
    return sign({ user }, privateKey, { algorithm: 'RS256', expiresIn: '15m' });
};