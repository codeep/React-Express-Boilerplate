import mongoose from 'mongoose'
import botSchema from '../schemas/bot';


module.exports = mongoose.model("Bot", botSchema);