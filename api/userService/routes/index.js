const express = require("express");
const router = express.Router();

const {getUsers, getUser, updateUser, loginUser, registerUser, forgotPassword, resetPassword,getLoggedUser } = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/me",auth, getLoggedUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);
router.post( "/register", registerUser );
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/", updateUser);

module.exports = router;