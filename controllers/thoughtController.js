const {User, Thought} = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts)=> res.json(thoughts))
        .catch((err)=> res.status(500).json(err))
    },
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thoughtsId)=> res.json(thoughtsId))
        .catch((err)=> res.status(500).json(err))
    },
    createNewThought(req,res) {
        Thought.create(req.body)
        .then((userThought)=> {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: userThought._id}},
                {new: true}
            )
        })
    },
    updateThought(req, res){
        Thought.updateOne({_id: req.params.thoughtId})
        .then((thoughts)=> {
            if(!thoughts) {
                res.status(404).json({message: 'No associated thoughts'})
            } else {
                res.json(thoughts)
            }
        })
        .catch((err)=>res.status(500).json(err))
    },
    deleteThought(req, res) {
        Thought.deleteOne({_id: req.params.thoughtId})
        .then((thoughtsdelete)=> {
            if (!thoughtsdelete) {
                res.status(404).json({message: 'No thoughts to delete'})
            } else {
                res.json(thoughtsdelete)
            }
        })
        .catch((err)=> res.status(500).json(err))
    },
    postReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {reactions: req.body},
            )
        .then((reaction)=> {
            if (!reaction) {
                res.status(404).json({message: 'No thoughts listed'})
            }
        })
        .catch((err)=> res.status(500).json(err))
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: reactionId}}
            .catch((err)=> res.status(500).json(err))
        )
    }
}