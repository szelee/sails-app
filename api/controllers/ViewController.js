module.exports = {
  index: function(req,res){
    console.log(req.getLocale());
    res.view('homepage', {'header':'Din Dins'});
  }
}