import ProductRepository from "../models/product.repository.js";

const productRepository = new ProductRepository();

export default class ProductController {

    // add a product
    async add(req,res,next) {
        try{
            const productCreated = await productRepository.add(req.body);
            res.status(201).send(productCreated);
        }catch(err) {
            next(err);
        }
    }

    // get all products
    async get(req,res,next) {
        try{
            const allProducts = await productRepository.get();
            res.status(200).send(allProducts);
        }catch(err) {
            next(err);
        }
        
    }

    // update a product
    async update(req,res,next) {
        try{
            const {id} = req.params;
            const {number} = req.query;
            const updatedQuantity = await productRepository.update(id, parseInt(number));
            if (!updatedQuantity) {
                res.status(400).send("Quantity failed to be updated");
            }else{
                const product = await productRepository.getProductById(id);
                res.status(200).send({product, message: "updated successfully"});
            }
        }catch(err) {
            next(err);
        }
        
    }

    // delete a product
    async delete(req,res,next) {
        try{
            const {id} = req.params;
            const deleteProduct = await productRepository.delete(id);
            if (!deleteProduct) {
                res.status(400).send("product to be deleted not found");
            }else{
                res.status(200).send({success: true, message: "product deleted"});
            }
        }catch(err) {
            next(err);
        }
        
    }
}