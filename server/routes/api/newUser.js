const express = require('express');
const router = express.Router();

const Users = require('../../Models/userRegistration');

// Get Api
router.get('/users', (req, res) => {
    Users.find()
        .then(data => res.json(data))
})

// Post Api
router.post('/users', (req, res) => {
    const newUser = new Users(req.body)
    newUser.save()
        .then(data => res.json(data))
        .catch(e => console.log('error', e))
})

module.exports = router;