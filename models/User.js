const {Schema, Types, model} = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema(
    {
        username: {
          type: String,
          unique: true,
          required: true,
          trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /[a-z]/,
        },
        thoughts: [Thought],
        friends: [this],
    }, {
        virtuals: {
            friendCount: {
                get() {
                    return this.friends.length;
                }
            }
        }
    }
)
const User = model('User', userSchema)

module.exports = User