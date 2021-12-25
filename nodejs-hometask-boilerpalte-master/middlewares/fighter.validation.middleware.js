const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    try {
        const { name, power, defense } = req.body
        if (!req.body) {
          throw new Error("Body shouldn't be null!")
        }
        if (!validationService.isNumber(power, 1, 100)) {
          throw new Error("Power has to be between 1 and 100!")
        }
        if (!validationService.isNumber(defense, 1, 10)) {
          throw new Error("Defense has to be between 1 and 10!")
        }
        if (!validationService.isNumber(health, 80, 120)) {
          throw new Error("Health has to be between 80 and 120!")
        }
        if (!validationService.isString(name)) {
          throw new Error("Name is not correct!")
        }
        next()
      } catch (e) {
        res.status(400).json(e.message)
      }
    next();
}

const fighterKeys = Object.keys(fighter)

const updateFighterValid = (req, res, next) => {
    try {
        const { id } = req.params
        const fields = Object.keys(req.body)
    
        if (
          !fields.every((key) => fighterKeys.indexOf(key) >= 0) || req.body.id || 
          FighterService.findFighterById(id) || Object.keys(fields).length == 0
        ) {
          throw new Error("Error in validation of fighter!")
        } else
          for (let key in req.body) {
            if (key === "health" && !validationService.isNumber(health, 80, 120)) {
              throw new Error("Health has to be between 80 and 120")
              break
            }
            if (key === "defense" && !validationService.isNumber(defense, 1, 10)) {
              throw new Error("Defense has to be between 1 and 10")
              break
            }
            if (key === "power" && !validationService.isNumber(power, 1, 100)) {
              throw new Error("Power has to be between 1 and 100")
              break
            }
          }
        next()
      } catch (e) {
        res.status(400).json(e.message)
      }
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;