const {Schema, Types} = require('mongoose');

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
        thoughts: [thoughtSchema],
        friends: [userSchema],
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
const User = mongoose.model('User', userSchema)

module.exports = User