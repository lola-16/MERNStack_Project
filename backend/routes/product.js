const express=require("express");
const router=express.Router();
const product=require("../controllers/productController");


router.route("/product")
.get(product.getAllProducts)
.post(product.createProduct)
.patch(product.updateProduct)
.delete(product.deleteProduct)


router.get("/product/:id",product.getProductById)

module.exports = router;