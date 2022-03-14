import Joi from '@hapi/joi';

export const profileValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
    DOB: Joi.string()
      .required(),
    interests: Joi.string()
      .required(),
    location: Joi.string()
      .required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};