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
    },
    updateUser(req, res) {
        User.updateOne({_id: req.params.userId})
        .then((users)=> {
            if (!users) {
                res.status(404).json({message: `No user listed`})
            } else {
                res.json(users)
            }
        })
        .catch((err)=> res.status(500).json(err))
    },
    deleteUser(req,res) {
        User.deleteOne({_id: req.params.userId})
        .then((users)=> {
            if (!users) {
                res.status(404).json({message: `No user listed`})
            } else {
                res.json(users)
            }
        })
        .catch((err)=> res.status(500).json(err))
    },
    addFriend(req,res) {
        User.findOne({_id: req.params.userId})
        .insertOne({friends: req.body})
        .then((friends)=> {
            return User.findOneAndUpdate(
                {_id: req.params.friendId},
                {$addToSet: {friends: friends._id}},
                {new: true}
            )
        })
        .catch((err)=> res.status(500).json(err))
    },
    deleteFriend(req,res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}})
            .catch((err)=> res.status(500).json(err))
    }
}