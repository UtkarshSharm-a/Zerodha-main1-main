const express=require("express")
const { Register, Login, LogOut } = require("../model/User")
const router= express.Router()

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(LogOut)


module.exports = router;
