var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let name = req.session.name
    let cards = [
        {
          category : "Boxing",
          description :"  I love boxing because of the struggle to be the best. It's the skill and coordination. It's the focus and stamina.",
          image : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boxer-exercising-with-punch-bag-royalty-free-image-685043825-1537211838.jpg"
        },
        {
         category : "Tavelling",
         description : "Travel takes us out of our comfort zones and inspires us to see, taste and try new things. It constantly challenges us1",
         image : "https://cdn.lifehack.org/wp-content/uploads/2016/06/21101143/person-984282_1280.jpg"
        },
        {
         category : "Developer",
         description : " The thing that I love about being a web developer, always has been the sole fact that it lets me create new things out of nothing.",
         image : "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
       }
       //  {
       //   category :"Freelancer",
       //   description : "Freelancers are self-employed individuals who are not contractually bound to one specific employer. ",
       //   image : "https://www.moneycrashers.com/wp-content/uploads/2019/02/become-freelancer-types-work.jpg"
       //  }
      ]
  res.render('home', {cards,name});
});

module.exports = router;