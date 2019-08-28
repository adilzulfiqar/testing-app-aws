const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const newUser = new Schema({
    email: String,
    password: String
});

module.exports = Users = mongoos.model('User', newUser);