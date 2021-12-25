const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();

router.get("/", fightController.getAllFights, responseMiddleware)

router.get("/:id", fightController.getFight, responseMiddleware)

router.delete("/:id", fightController.deleteFight, responseMiddleware)

module.exports = router;