const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Product = require('../../models/Product');
const validateProductInput = require('../../validations/products');

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
                        imgString: req.body.imgString
                    });
                    newProduct.save( (err, newProduct) => res.json(newProduct));
                }
            })
    }
);

// Stack Overflow Version
// app.delete('/:id', (req, res) => {
//     Product.remove({ _id: mongodb.ObjectID(req.params.id) }, (err, result) => {
//         if (err) return res.status(404).json(err)
//         console.log(req.body)
//         res.json({ msg: 'Product successfully destroyed' })
//     })
// })

router.delete('/:id', (req, res) => {
    Product.remove({ _id: mongodb.ObjectID(req.params.id) })
        .then(() => res.json({ msg: 'Product successfully erased.' }))
        .catch(err => res.status(404).json(err))
})

// router.update('/:id', (req, res) => {
//     Product.update({ _id: mongodb.ObjectID(req.params.id) },
//         req.params.product    
//     )
//         .then(updated_product => res.json(updated_product))
//         .catch(err => res.status(404).json(err))
// })
module.exports = router;
