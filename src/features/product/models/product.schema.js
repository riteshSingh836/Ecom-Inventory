import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"]},
    quantity: {type: Number, required: [true, "Quantity is required"]}
});

export const ProductModel = mongoose.model('Product', productSchema);