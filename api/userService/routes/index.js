const express = require("express");
const router = express.Router();

const { loginUser, registerUser, forgotPassword, resetPassword,getLoggedUser } = require("../controllers/auth");
const auth = require("../middleware/auth");

router.post("/me",auth, getLoggedUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);
router.post("/register",auth, registerUser);

module.exports = router;