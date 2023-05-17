import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export default messageModel = model(messageSchema, "messages")