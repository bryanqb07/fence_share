const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Product = require('../../models/product');
const Category = require('../../models/category');
const validateProductInput = require('../../validations/products');

// Products

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ noproducts: 'No products found' }));
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err =>
            res.status(404).json({ noproductfound: 'No product found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Product.findOne({ code: req.body.code})
            .then(code => {
                if (code) {
                    // Throw a 400 error if the email address already exists
                    errors.code = "Product code already exists. Please use unique name"
                    return res.status(400).json(errors)
                } else {
                    const newProduct = new Product({
                        title: req.body.title,
                        description: req.body.description,
                        code: req.body.code,
                        // dimensions
                        dimensions: {
                            width: req.body.width,
                            height: req.body.height
                        },
                        //
                        price: {
                            per_unit: req.body.per_unit,
                            per_ft_install_fee: req.body.per_ft_install_fee,
                            flat_install_fee: req.body.flat_install_fee,
                            sq_ft_per_unit_time: {
                                0: req.body.sq_ft_0, // price per square ft0-3 months
                                1: req.body.sq_ft_1,  // 3-6 months
                                2: req.body.sq_ft_2,  // 6-9 months
                                3: req.body.sq_ft_3,  // 9-12 months
                            }
                        },
                        imgString: req.body.imgString,
                        category: req.body.category
                    });
                    newProduct.save()
                        .then(product => res.json(product))
                        .catch(err => res.status(404).json(err))
                }
            })
    }
);

router.post('/update', (req, res) => {
    const product_id = req.body.id
    Product.findByIdAndUpdate(req.body.id)
        .then((product) => res.json({ product }))
        .catch(err => res.status(404).json(err))
})

router.post('/delete', (req, res) => {
    console.log(req.body)
    const product_id = req.body.product_id
    Product.findByIdAndDelete(product_id)
        .then(() => res.json({ product_id }))
        .catch(err => res.status(404).json(err))
})

// Categories

router.get('/categories', (req, res) => {
    Category.find()
        .sort({ date: -1 })
        .then(categories => res.json(categories))
        .catch(err => res.status(404).json({ nocategories: 'No categories found' }));
});

router.get('/categories/:id', (req, res) => {
    return res.json({msg: "ping"})
    // Category.findById(req.params.id)
    //     .then(selectedCategory => {
    //         Product.find({ category: selectedCategory.title })
    //             .then(products => res.json(products))
    //             .catch(err =>
    //                 res.status(404).json({ noproductfound: 'No product found with that ID' })
    //             );
    //     })
    //     .catch(err => res.status(404).json({ nocategories: 'No category found' }));
});

router.post('/categories',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCategoryInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Category.findOne({ title: req.body.title })
            .then(category => {
                if (category) {
                    // Throw a 400 error if the category already exists
                    errors.code = "Category already exists. Please use unique title"
                    return res.status(400).json(errors)
                } else {
                    const newCategory = new Category({ title: req.body.title })
                    newCategory.save((err, newCategory) => res.json(newCategory));
                }
            })
    }
);

router.post('categories/update', (req, res) => {
    Category.findByIdAndUpdate(req.body.id, { title: req.body.title })
        .then(category => res.json(category))
        .catch(err => res.status(404).json({ nocategories: 'No category found' }));
});

router.post('categories/delete', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    Category.findByIdAndDelete(id)
        .then( () => { // after category is deleted, change product categories to unknown
            Product.find({ category: title })
                .then(products => {
                    products.forEach(product => {
                        product.update({ category: "unknown" })
                    })
                    return res.json({ category_id: id })
                })
        })
        .catch(err => res.status(404).json({ nocategories: 'No categories found' }));
});


module.exports = router;
