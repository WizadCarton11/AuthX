const express = require("express");
const router = express.Router();

const {
  register,
  login,
  refresh,
  logout
} = require("../controllers/authcontroller");

const { protect } = require("../middleware/authmiddleware");
const { authorize } = require("../middleware/rolemiddleware");
const { validate } = require("../middleware/validatemiddleware");

const {
  registerSchema,
  loginSchema
} = require("../validators/authValidator");

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/refresh", refresh);
router.post("/logout", logout);

router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
