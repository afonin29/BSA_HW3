const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    try {
        const { id, firstName, lastName, email, phoneNumber, password } = req.body
    
        if (!req.body) {
          throw new Error("Request body mustn`t be null")
        }
        for (let key in user) {
          if (key !== "id") {
            if (!req.body[key]) {
              throw new Error(`User with such id ${key} exists`)
            }
          }
        }
        if (Object.keys(user).length - 1 !== Object.keys(req.body).length) {
          throw new Error("User entity to create isn't valid")
        }
    
        if (!validationService.isPhone(phoneNumber)) {
          throw new Error("Phone number format +380XXXXXXXXX")
        }
        if (!validationService.isGmail(email)) {
          throw new Error("Email must be gmail")
        }
        if (!validationService.isString(password, 3)) {
          throw new Error("Password is not valid")
        }
        if (!validationService.isString(firstName)) {
          throw new Error("First name is not valid")
        }
        if (!validationService.isString(lastName)) {
          throw new Error("Last name is not valid")
        }
        next()
      } catch (e) {
        res.status(400).json(e.message)
      }

    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    try {
        if (!req.body) {
          throw new Error("Request body has not to be null!")
        }
        for (let key in req.body) {
          if (!user.hasOwnProperty(key)) {
            throw new Error(`User data to update isn't valid`)
          }
        }
        if (req.body.firstName && !validationService.isString(req.body.firstName)) {
          throw new Error("First name isn't valid!")
        }
        if (req.body.lastName && !validationService.isString(req.body.lastName)) {
          throw new Error("Last name isn't valid!")
        }
        if (
          req.body.phoneNumber &&
          !validationService.isPhone(req.body.phoneNumber)
        ) {
          throw new Error("Phone number has to be in format +380xxxxxxxxx")
        }
        if (req.body.email && !validationService.isGmail(req.body.email)) {
          throw new Error("Email has to be gmail (xxx@gmail.com)")
        }
        if (
          req.body.password &&
          !validationService.isString(req.body.password, 3)
        ) {
          throw new Error("Password isn't valid")
        }
        next()
      } catch (e) {
        res.status(400).json(e.message)
      }
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;