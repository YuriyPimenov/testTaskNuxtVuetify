const bcrypt = require('bcrypt-nodejs')

const password = '12345678';

const salt = bcrypt.genSaltSync(10)
console.log(bcrypt.hashSync(password, salt))
