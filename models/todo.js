import mongoose from 'mongoose'
import todoSchema from '../schemas/todo';


module.exports = mongoose.model("Todo", todoSchema);
