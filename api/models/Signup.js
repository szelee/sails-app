/**
* Signup.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email_addr : {
      type: 'string',
      required: true,
      unique: true
    },
    
    toJSON: function(){
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }
  }
  
};

