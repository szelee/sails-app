/* global signup */
/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `ContactController.signup()`
   */
  homepage: function(req,res){
    res.view();
  },
  
  restaurantSignup: function(req, res){
    sails.log.info("restaurants signup form");
    if(req.method == "POST"){
      Signup.create(req.params.all()).exec(function(error, signup){
        if(error){
          sails.log.error(error);
          //res.send(500, {error: "DB error!"});
          req.flash('failed', error.message);
          res.redirect("/forrestaurants#error");
        }
        else{
          sails.log.info("successful");
          //res.send(200, contact);
          req.flash('success','Thank you for registering with Din Dins!');
          res.redirect("/thankyou");
        }
      });
    }
  },
  
  signup: function (req, res) {
    sails.log.info("sign up start signup form");
    var lang = req.param('lang');
    sails.log.debug(lang);
    
    if(req.method == "POST"){
      Contact.create(req.params.all()).exec(function(error, contact){
        if(error){
          sails.log.error(error);
          //res.send(500, {error: "DB error!"});
          req.flash('failed', error);
          if(lang=="zh-hk")
            lang = "zh-tw";
          else if (lang=="zh-sg")
            lang = "zh-cn";
          res.redirect("/" + lang + "/");
        }
        else{
          //console.log("successful");
          //res.send(200, contact);
          req.flash('success','Thank you for registering with Din Dins!');
          if(lang=="zh-hk")
            lang = "zh-tw";
          else if (lang=="zh-sg")
            lang = "zh-cn";
          res.redirect("/" + lang + "/");
        }
      });
    }
  }
};

