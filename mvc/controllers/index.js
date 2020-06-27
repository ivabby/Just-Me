
let data = require("../../data");

const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostAmount = 6;

const getHomePage = function(req,res){
    res.render('index' , {title : "Just Me" , posts : postData , active : "index" , categoryData : categoryData});
}

const getBlogPost = function(req,res) {
    let params = req.params;
    let post = postData.find((val) => val.id == params.postid);

    if(!post){
        res.redirect('/404');
    }

    res.render("post" , {title : post.title , post : post , uniqueTags : uniqueTags , recentPosts : postData.slice(0 , recentPostAmount) , categoryData : categoryData});
}

const get404 = function(req,res) {
    res.render('404' , {title : '404 - I couldnot find that page....' , uniqueTags : uniqueTags , recentPosts : postData.slice(0 , recentPostAmount) , categoryData : categoryData});
}

const redirect404 = function(req , res) {
    res.redirect("/404");
}

const getAbout = function(req,res) {
    res.render("about" , {title : "About Me" , active : "about" , categoryData : categoryData});
}

const getContact = function(req,res) {
    res.render("contact" , {title : "Contact" , active : "contact" , categoryData : categoryData});
}

const getFilteredList = function(req,res) {
    let query = req.query;
    let filteredPost = postData.filter((val) => val.category == query.category);
    res.render('filter' , {title : "Just Me - Filtered" , active : query.category, posts : filteredPost , categoryData : categoryData});
}

module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404,
    getAbout,
    getContact,
    getFilteredList
}
