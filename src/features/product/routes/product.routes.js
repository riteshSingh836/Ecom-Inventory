import express from 'express';
import ProductController from '../controllers/product.controller.js';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post('/create', productController.add);
productRouter.get('/', productController.get);
productRouter.post('/:id/update_quantity', productController.update);
productRouter.delete('/:id', productController.delete);

export default productRouter;