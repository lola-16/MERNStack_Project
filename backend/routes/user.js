const express=require("express");
const router=express.Router();
const user=require("../controllers/userController");


router.route("/user")
.get(user.getUserProfile)
.post(user.registerUser)


router.get("/user/:id",user.loginUser)

module.exports = router;