const express = require("express");
const router1 = express.Router();
router1.get('/api',(req,res,next)=>{
    res.send("hello")
});
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,logout
} = require("../controllers/auth-controller");


router1.post("/register", signup);
router1.post("/login", login);
router1.get("/user", verifyToken,getUser);
router1.get("/refresh", refreshToken, verifyToken, getUser);
router1.post("/logout", verifyToken, logout);
module.exports = router1;