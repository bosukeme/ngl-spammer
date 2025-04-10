import Joi from "joi";

export const spamFormSchema = Joi.object({
    spamNumber: Joi.number().integer().min(1).max(20).required(),
    nglName: Joi.string().required(),
    textInput: Joi.string().min(1).required()
});