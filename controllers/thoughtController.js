const {User, Thought} = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts)=> res.json(thoughts))
        .catch((err)=> res.status(500).json(err))
    },
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thoughtId)=> res.json(thoughtId))
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
            {$addToSet: {reactions: req.body}},
            )
        .then((reaction)=> {
            if (!reaction) {
                res.status(404).json({message: 'No thoughts listed'})
            } else {
                res.json(reaction)
            }
        })
        .catch((err)=> res.status(500).json(err))
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: req.params.reactionId}})
            .catch((err)=> res.status(500).json(err))
        
    }
}