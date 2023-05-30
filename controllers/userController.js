const {User, Thought} = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err)=> res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then((userId) => res.json(userId))
        .catch((err)=> res.status(500).json(err))
    },
    createNewUser(req, res) {
        User.create(req.body)
        .then((newUser) => res.json(newUser))
        .catch((err)=> res.status(500).json(err))
    }
}