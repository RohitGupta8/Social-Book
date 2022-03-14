import Joi from '@hapi/joi';

export const searchValidator = (req, res, next) => {
  const schema = Joi.object({
    interests: Joi.string()
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