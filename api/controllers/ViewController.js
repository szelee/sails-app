module.exports = {
  index: function(req,res){
    res.view('homepage', {'header':'Din Dins'});
  }
}