module.exports = function(req, res, next) {
	//this is used to manually control the language
	//console.log("in localise policy");
	req.setLocale(req.param('lang'));
	next();
}