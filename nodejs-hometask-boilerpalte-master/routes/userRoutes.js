const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get("/", userController.getAllUsers, responseMiddleware)

router.get("/:id", userController.getOneUser, responseMiddleware)

router.post("/", createUserValid, userController.createUser, responseMiddleware)

router.put(
  "/:id",
  updateUserValid,
  userController.updateUser,
  responseMiddleware
)

router.delete("/:id", userController.deleteUser, responseMiddleware)

module.exports = router;