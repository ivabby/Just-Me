
var express = require('express');
var router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get('/', indexController.getHomePage);
router.get('/posts/:postid' , indexController.getBlogPost);


router.get("/about" , indexController.getAbout);
router.get("/contact" , indexController.getContact);

router.get('/404' , indexController.get404);
router.get("*" , indexController.redirect404);

module.exports = router;
