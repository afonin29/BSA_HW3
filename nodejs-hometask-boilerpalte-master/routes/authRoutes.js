const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post("/login", authController.login, responseMiddleware)

module.exports = router;