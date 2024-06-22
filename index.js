import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './src/features/product/routes/product.routes.js';
import applicationErrorMiddleware from './src/error-handler/applicationError.js';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome to product inventory Ecom Api");
});

app.use('/products', productRouter);

app.use(applicationErrorMiddleware);

export default app;