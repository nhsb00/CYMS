const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const User = require('../../models/User');
const Product = require('../../models/Product')
const validateCommentInput = require('../../validation/comments');

router.get('/test', (req, res) => {
    res.json({msg: "This is the comments route!"})
});

router.post("/",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        
    const {isValid, errors} = validateCommentInput(req.body);
        if (!isValid) {
            
            return res.status(400).json(errors);
        }

        const newComment = new Comment({
            
            user: req.user.id,
            product: req.body.product_id,
            content: req.body.content
        });

        newComment.save()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json({err}))
})


router.get('/product/:product_id', (req, res) =>{
     

    Comment.find({product: req.params.product_id})
    .sort({date: -1})
    .populate('user')
    .then(comments => {
        
         return res.json(comments)})
    .catch(err => {
        
        return 
        res.status(404).json({ nocommentsfound: 'No Comments found from that product'})})
});

router.get('/', (req, res) =>{
     

    Comment.find({product: req.params.product_id})
    .sort({date: -1})
    .populate('user')
    .then(comments => {
        
         return res.json(comments)})
    .catch(err => {
        
        return 
        res.status(404).json({ nocommentsfound: 'No Comments found from that product'})})
});

// router.get('/', (req, res) => {
//     Comment.find()
//         .sort({ date: -1 })
//         .then(comments => res.json(comments))
//         .catch(err => res.status(404).json({ noComments: 'No comment yet' }));
// });

router.delete('/:comment_id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => { 

    Comment.findByIdAndDelete(req.params.comment_id)
    .then(() => res.status(200).json({message: "Deleted!"}))
    .catch(err => {res.status(400).json({err: "no comment found"})})

});

router.put('/:comment_id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {

    Comment.findByIdAndUpdate(req.params.comment_id, 
    {content: req.body.content})
    .then(comments => { return res.json(comments)})
    .catch(err => { 
       return res.status(404).json({
            nocommentsfound: 'No Comments found from that product'
        })
    })
})


module.exports = router;