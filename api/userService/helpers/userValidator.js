  
const Joi = require('joi')

exports.validateUsers = (user)=>{
    const schema = Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        age: Joi.number().min(18).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        isAdmin: Joi.bool().required(),
        gender: Joi.string().required()
    })
    
    return schema.validate(user)
}