const express = require("express");
const authMiddleware = require("../middleware/session")
const checkAdminRole = require("../middleware/rol")

const router = express.Router();

const {
  login,
  createUser,
  getUsers,
  deleteUser,
  update,
  updateForAdmin,
} = require("../controllers/Users");
require("dotenv").config();

// LOGIN PAGE - START
router.get("/login", function (req, res, next) {
  res.render("../frontend/pagina_torneos/public/index.html"); // TODO (?)
});

router.post("/login", login);
// LOGIN PAGE - END

// REGISTER PAGE - START
router.get("/register", function (req, res, next) {
  res.render("register.html");
});




router.post("/register", createUser);
// REGISTER PAGE - END
router.post("/update",authMiddleware,update);

//administrador

router.put("/update/:id",authMiddleware,checkAdminRole,updateForAdmin);
router.delete("/delete/:nickname",authMiddleware,checkAdminRole, deleteUser);
router.get("/getUsers",authMiddleware, checkAdminRole,getUsers);






module.exports = router;
