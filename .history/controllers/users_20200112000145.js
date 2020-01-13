const User=require("../models/user")
exports.sayHi = function(req, res) {
  res.json({ message: "Namaste" });
};
exports.signUp=function(req,res){
  const user=new User(req.body);
  user.save(())
}