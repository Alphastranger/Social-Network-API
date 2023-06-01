const {Schema, Types, model} = require('mongoose')
const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }, {
        virtual: {
            reactionCount:
            {get(){
                return this.reactions.length
            }
        }
        }
    }
)


// const Thought = model('Thought', thoughtSchema)

module.exports = thoughtSchema