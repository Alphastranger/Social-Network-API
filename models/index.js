const User = require('./User')
const {Schema, Types, model} = require('mongoose');
const thoughtSchema = require('./Thought')
const Thought = model('Thought', thoughtSchema)
module.exports = {User, Thought}