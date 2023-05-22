import { Schema, model } from "mongoose";
import paginate from 'mongoose-paginate-v2'

const orderSchema = Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

orderSchema.plugin(paginate)

const orderModel = model("orders", orderSchema)

export default orderModel