import Joi from "joi";

export const spamFormSchema = Joi.object({
  spamNumber: Joi.string().required(),
  nglName: Joi.string().required(),
  textInput: Joi.string().min(1).required(),
});