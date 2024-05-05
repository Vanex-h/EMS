const mongoose= require('mongoose')
const Joi  = require('joi')


const empSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    national_id : {
        type : number ,
        required : true,
        unique : true
    
    },
    telephone : {
        type : number ,
        required : true,
        unique : true
    
    },
    email  :  {
        type : email ,
        required :  true,
        unique : true
    },
    department  :  {
        type : String ,
        required :  true,
        unique : false
    },
    position  :  {
        type : String ,
        required :  true,
        unique : false
    },
    laptop_manufacturer  :  {
        type : String ,
        required :  true,
        unique : false
    },
    model  :  {
        type : String ,
        required :  true,
        unique : false
    },
    serial_number  :  {
        type : number ,
        required :  true,
        unique : false
    },
    password :  {
        type : String ,
        required : true 
    }


}, {timestamps :true})


const employeeValidator = Joi.object({
    email : Joi.string().required().email(),
    firstName: Joi.string().required().min(1).max(10),
    lastName: Joi.string().required().min(1).max(10),
    national_id: Joi.number().required().min(16).max(16),
    telephone: Joi.number().required().min(10).max(10),
    department: Joi.string().required().min(3).max(10),
    position: Joi.string().required().min(3).max(10),
    laptop_manufacturer: Joi.string().required().min(3).max(10),
    model: Joi.string().required().min(3).max(10),
    serial_number: Joi.number().required().min(10).max(10),
})
const Employee= mongoose.model('employee', empSchema);
module.exports= {
    Employee ,
    employeeValidator
}