import { ApplicationError } from "../../../error-handler/applicationError.js";
import { ProductModel } from "./product.schema.js";


export default class ProductRepository {

    // add a product
    async add(product) {
        try{
            const newproduct = new ProductModel(product);
            await newproduct.save();
            return newproduct;
        }catch(err) {
            console.log(err);
        }

    }

    // get all products
    async get() {
        try{
            const allProducts = await ProductModel.find();
            return allProducts;
        }catch(err) {
            console.log(err);
        }
    }

    // get a product by Id
    async getProductById(id) {
        try{
            const product = await ProductModel.findById(id);
            return product;
        }catch(err) {
            console.log(err);
        }
    }

    // update a product
    async update(id, number) {
        try{
            const productId = await ProductModel.findById(id);
            if (!productId) {
                throw new ApplicationError("Product not found", 404);
            }else{
                productId.quantity += number;
                return await productId.save();
            }
        }catch(err) {
            console.log(err);
        }
        
    }

    // delete a product
    async delete(id) {
        try{
            const productId = await ProductModel.findById(id);
            if (!productId) {
                throw new ApplicationError("Product not found", 404);
            }else{
                return await ProductModel.findByIdAndDelete(id);
            }
        }catch(err) {
            console.log(err);
        }
    }
}