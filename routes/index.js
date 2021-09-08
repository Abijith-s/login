var express = require('express');
const reload = require('reload/lib/reload');
const { response } = require('../app');
var router = express.Router();
var users = [{name:"Abijith",password:12345},{name:"Anu",password:6789}]

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.session.loggedIn){
    res.redirect('home')
    
  }
  else{
    res.render('index');
  }
 
});
router.post('/home',function(req,res) {
  console.log(req.body)
 users.find(user=>{
  if(req.body.name==user.name && req.body.password==user.password){
    req.session.loggedIn = true
    req.session.name = user.name
    console.log(req.session);
    res.redirect('home')
  }
  else{
    if(req.body.name!=user.name){
      res.render('index',{message1:"check name"})
    }
    else if(req.body.password!=password){
      res.render('index',{message2:"check password"})
    }
  }
 })
 
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
