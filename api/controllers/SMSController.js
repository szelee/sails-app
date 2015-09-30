module.exports = {
	send: function(req, res){
		var Twilio = require('machinepack-twilio');
	
		// Send a message using the Twilio API
		Twilio.sendMessage({
			accountSid: 'AC8b36ee3bc51aea9be2121535508d241b',
			authToken: '3de9ddd8853ea035015604d6fc5d7c6e',
			to: req.param('to_num'),
			body: req.param('msg'),
			from: '+441702806197',
			}).exec({
			// An unexpected error occurred.
			error: function (err){
				return res.negotiate(err);
			},
			// No sender ("From") phone numbers are available to your Twilio account.
			noPhoneNumbersAvailable: function (){
				console.log('no phone number');
			},
			// Either a "body" or "mediaUrl" (or both) must be specified
			noBodyOrMediaSpecified: function (){
				console.log('no body in sms');
			},
			// OK.
			success: function (){
				return res.ok();
			},
		});
	}
	
};