import Joi from "joi";

export const defaultSchema = Joi.object({
  name: Joi.string().required()  
})

export const studentSchema = Joi.object({
    name: Joi.string().required(),
    school_id: Joi.number().required()
})