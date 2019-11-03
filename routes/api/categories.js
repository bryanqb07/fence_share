const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const Category = mongoose.models.categories;
const Category = require('../../models/category');
const Product = mongoose.models.products;
// console.log(mongoose.models)
// console.log(Category)
// console.log(Product)
const validateCategoryInput = require('../../validations/category');

// Categories

router.get('/', (req, res) => {
    Category.find()
        .sort({ date: -1 })
        .then(categories => res.json(categories))
        .catch(err => res.status(404).json({ nocategories: 'No categories found' }));
});

router.get('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(selectedCategory => {
            Product.find({ category: selectedCategory.title })
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
                    newCategory.save()
                        .then(newCategory => res.json(newCategory))
                        .catch(err => res.status(400).json(err))
                }
            })
    }
);

router.post('/update', (req, res) => {
    Category.findByIdAndUpdate(req.body.id, { title: req.body.title })
        .then(category => res.json(category))
        .catch(err => res.status(404).json({ nocategories: 'No category found' }));
});

router.post('/delete', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    Category.findByIdAndDelete(id)
        .then(() => { // after category is deleted, change product categories to unknown
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
