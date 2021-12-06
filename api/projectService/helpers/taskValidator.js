  
const Joi = require('joi')

exports.taskValidator = (task)=>{
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        user_id: Joi.string().required(),
        project_id: Joi.string().required(),
        duration: Joi.string().required(),
        status: Joi.string().required(),
        description: Joi.string().min(5).required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required()
    })
    
    return schema.validate(task)
}