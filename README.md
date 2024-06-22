# Ecom-Inventory
Designed an API for an ecommerce platform admin to manage product inventory

Install all the necessary packages --
- use npm i command for all package installing.

Run server on localhost using - nodemon server.js

Test APIs usiing POSTMAN tool. Below are the URL's for all the APIs---
Add a product - POST - localhost:5000/products/create 
Get all product - GET - localhost:5000/products/
Update a product quantity - POST - localhost:5000/products/:id/update_quantity/?number=20  (note: pass number as a query parameter).
Delete a product - DELETE - localhost:5000/products/6676946cd5fe49575e98e097
