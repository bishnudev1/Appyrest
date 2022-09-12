const express = require('express');
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require('../controller/Products');

const router = express.Router();

router.use(express.json());

router.route('/AllProducts').get(getAllProducts);
router.route('/Product/New').post(createProduct);
router.route('/Product/:id').put(updateProduct);
router.route('/Product/:id').delete(deleteProduct);

module.exports = router;