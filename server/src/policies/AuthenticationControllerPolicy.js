const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "You must provide a valid email addres",
          });
          break;
        case "password":
          res.status(400).send({
            error: `Password rules:
                        <br> 
                        1. duhet me kan me shkronja edhe numra
                        2. duhet me kan ma i gjat se 5 karaktere
                        `,
          });
          break;
        default:
          res.status(400).send({
            error: "invalid registration",
          });
      }
    } else {
      next();
    }
  },
};
