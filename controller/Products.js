const Products = require('../models/ProductsSchema');

exports.getAllProducts = async (req, res) => {
    const AllProducts = await Products.find();

    if (!AllProducts) {
        res.status(500).json({
            success: false,
            message: 'No products are found'
        });
    }
    res.status(200).json({
        success: true,
        AllProducts
    });
}

exports.createProduct = async (req, res) => {
    const { name, desc, rating, price } = req.body;

    if (!name || !desc || !rating || !price) {
        res.status(422).json({
            success: false,
            message: 'Fill all the product details'
        });
    }
    else {
        try {
            const newProduct = new Products({ name, desc, rating, price });
            const addProduct = await newProduct.save();
            res.status(201).json({
                success: true,
                message: 'New product has been added'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

exports.updateProduct = async (req, res) => {
    let product = await Products.findById(req.params.id);

    if (!product) {
        res.status(500).json({
            success: false,
            message: 'Product is not found'
        });
    }
    else {
        try {
            product = await Products.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true,
                useFindAndModify:false
            })
            res.status(201).json({
                success: true,
                message: 'Product has been updated'
            });
        } catch (error) {
            console.log(error);
        }
    }
}

exports.deleteProduct = async (req, res) => {
    const product = await Products.findById(req.params.id);

    if (!product) {
        res.status(500).json({
            success: false,
            message: 'Product is not found'
        });
    }
    else {
        try {
            await product.remove();
            res.status(201).json({
                success: true,
                message: 'Product has been deleted'
            });
        } catch (error) {
            console.log(error);
        }
    }
}