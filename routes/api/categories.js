const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Category = mongoose.models.categories;
const Product = mongoose.models.products;
console.log(mongoose.models)
const validateCategoryInput = require('../../validations/category');

router.get('/', (req, res) => {
    Category.find()
        .sort({ date: -1 })
        .then(categories => res.json(categories))
        .catch(err => res.status(404).json({ nocategories: 'No categories found' }));
});

router.get('/:id', (req, res) => {
    Category.findOne({ _id: req.body.id })
        .then(selectedCategory => {
            Product.find({category: selectedCategory.title})
                .then(products => res.json(products))
                .catch(err =>
                    res.status(404).json({ noproductfound: 'No product found with that ID' })
                );
        })
        .catch(err => res.status(404).json({ nocategories: 'No category found' }));
});

router.post('/',
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

router.post('/update', (req, res) => {
    Category.findOneAndUpdate({ _id: req.body.id }, { title: req.body.title })
        .then(category => res.json(category))
        .catch(err => res.status(404).json({ nocategories: 'No category found' }));
});

router.post('/delete', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    Category.findOneAndDelete({ _id: id })
        .then(category => { // after category is deleted, change product categories to unknown
            Product.find({ category: title })
                .then(products => {
                    products.forEach(product => {
                        product.update({ category: "unknown"})
                    })
                })
        })
        .catch(err => res.status(404).json({ nocategories: 'No categories found' }));
});

module.exports = router;
