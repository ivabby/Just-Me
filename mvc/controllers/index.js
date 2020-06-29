
let data = require("../../data");

const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostAmount = 6;

const defaultData = {
    categoryData : categoryData
}
const rightSidebar = {
    uniqueTags: uniqueTags,
    recentPosts: postData.slice(0,recentPostAmount)
}

const getHomePage = function(req,res){

    let data = {
        ...defaultData,
        title: "Just Me",
        posts: postData,
        active: "index"
    }

    res.render('index' , data);
}

const getBlogPost = function(req,res) {
    let params = req.params;
    let post = postData.find((val) => val.id == params.postid);

    if(!post){
        res.redirect('/404');
    }

    let data = {
        ...defaultData,
        ...recentPosts,
        title: post.title,
        post: post,
    }

    res.render("post" , data);
}

const get404 = function(req,res) {
    let data = {
        ...defaultData,
        ...rightSidebar,
        title: "404 - I couldnot find that page....",
    }
    res.render('404' , data);
}

const redirect404 = function(req , res) {
    res.redirect("/404");
}

const getAbout = function(req,res) {
    let data = {
        ...defaultData,
        title: "About Me",
        active: "about"
    }
    res.render("about" , data);
}

const getContact = function(req,res) {

        let data = {
            ...defaultData,
            title: "Contact",
            active: "contact"
        }
    res.render("contact" , data);
}

const getFilteredList = function(req,res) {
    let query = req.query;
    let filteredPost = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag);
    });

    let data = {
        ...defaultData,
        title: "Just Me - Filtered",
        active: query.category,
        posts: filteredPost
    }

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
