const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get("/", fighterController.getAllFighters, responseMiddleware)

router.get("/:id", fighterController.getOneFighter, responseMiddleware)

router.post(
  "/",
  fighterController.createFighter,
  responseMiddleware,
  createFighterValid
)

router.put(
  "/:id",
  fighterController.updateFighter,
  responseMiddleware,
  updateFighterValid
)

router.delete("/:id", fighterController.deleteFighter, responseMiddleware)

module.exports = router;