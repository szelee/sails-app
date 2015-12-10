module.exports = {
	thankyouSignup: function (options) {
		if (options.lang == "zh-tw" || options.lang == "zh-hk")
		{
			sails.hooks.email.send(
				"thankyouBeta_zhtw",
				{
					first_name: options.first_name_zh,
				},
				{
					to: options.email_addr,
					subject: "感謝您对點點食的興趣"
				},
				function (err) {
					if (err) {
						sails.log.debug("Error in sending email: " + err);
					}
				}
			);
		}
		else if (options.lang == "zh-cn" || options.lang == "zh-sg")
		{
			sails.hooks.email.send(
				"thankyouBeta_zhcn",
				{
					first_name: options.first_name_zh,
					//guestName: options.firstName,
				},
				{
					to: options.email_addr,
					subject: "感谢您对点点食的兴趣"
				},
				function (err) {
					if (err) {
						sails.log.debug("Error in sending email: " + err);
					}
				}
			);
		}		
		else
		{
			sails.hooks.email.send(
				"thankyouBeta",
				{
					first_name: options.first_name,
					//guestName: options.firstName,
				},
				{
					to: options.email_addr,
					subject: "Thank you for signing up Din Dins beta testing"
				},
				function (err) {
					if (err) {
						sails.log.debug("Error in sending email: " + err);
					}
				}
			);
		}		
	}
};