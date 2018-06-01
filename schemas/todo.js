import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
    name: String,
    description: String,
    deadline: Date
});
