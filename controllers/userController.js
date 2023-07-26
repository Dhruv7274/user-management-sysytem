const User = require("../models/userModel");

const loadRegister = async (req, res) => {
  try {
    res.render("registration");
  } catch (error) {
    console.log(error.message);
  }
};

const insertUser = async (req, res) => {
  try {
   const user= new User({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        image:req.file.filename,
        password:req.body.password,
        is_admin:0
    });
   const data=await user.save();
   if(data){
    res.render('registration',{message:"Your registration has been successfully"});
   }else{
    res.render('registration',{message:"Your registration has been failed"});
   }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  loadRegister,
  insertUser
};
