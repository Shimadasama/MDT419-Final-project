var express = require('express');
var router = express.Router();
var csrf = require('csurf');
const passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  
  Product.find(function(err,docs){
    
    res.render('shop/index', { title: '"WodWai Shop"',products: docs });
  });   
  // ตั้งชื่อตรงนี้ title
});

router.get('user/signup',function(req,res,next)
{
  var messages = req.flash('error');
  res.render('user/signup',{csrfToken : req.csrfToken(),messages : message,hasErrors: messages.length>0})
});
router.post('user/signup',passport.authenticate('local.signup',{
  successRedirect : '/user/profile',
  failureRedirect : '/user/signup',
  failureFlash : true
}));
router.get('/user/profile',function(req,res,next){
  res.render('user/profile');
})
router.get('/user*signin',function(req,res,next)
{
  res.render('user/signin',{csrfToken : req.csrfToken(),messages : message,hasErrors: messages.length>0})
})
router.post('/user/signin',passport.authenticate('local.signin',{
  successRedirect : '/user/profile',
  failureRedirect : '/user/signin',
  failureFlash : true
}))
module.exports = router;
