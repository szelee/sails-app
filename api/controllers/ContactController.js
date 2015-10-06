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
    console.log("restaurants signup form");
    if(req.method == "POST"){
      Signup.create(req.params.all()).exec(function(error, signup){
        if(error){
          console.log(error);
          //res.send(500, {error: "DB error!"});
          req.flash('failed', error);
          res.redirect("/forrestaurants");
        }
        else{
          console.log("successful");
          //res.send(200, contact);
          req.flash('success','Thank you for registering with Din Dins!');
          res.redirect("/thankyou");
        }
      });
    }
  },
  
  signup: function (req, res) {
    console.log("sign up start");
    var lang = req.param('lang');
    console.log(lang);
    
    if(req.method == "POST"){
      Contact.create(req.params.all()).exec(function(error, contact){
        if(error){
          console.log(error);
          //res.send(500, {error: "DB error!"});
          req.flash('failed', error);
          res.redirect("/" + lang + "/");
        }
        else{
          console.log("successful");
          //res.send(200, contact);
          req.flash('success','Thank you for registering with Din Dins!');
          res.redirect("/" + lang + "/");
        }
      });
    }
  }
};

