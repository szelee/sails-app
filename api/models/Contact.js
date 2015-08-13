/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,

  attributes: {
    //first_name in english
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    first_name_zh: {
      type: 'string',
      defaultsTo: ''
    },
    last_name_zh: {
      type: 'string',
      defaultsTo: ''
    },
    email_addr: {
      type: 'string',
      required: true,
      unique: true
    },
    arrival_date: {
      type: 'date'
    },
    
    toJSON: function(){
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }
  }
};

