const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name:{type:String, required:true},
    value:{type:Number, min: 0, required:true}
})

const debtSchema = new mongoose.Schema({
    name:{type:String, require:[true,'Informe o Valor do debito']},
    value:{type:Number, min: 0, required:true},
    status:{type:String, require:false, uppercase:true,
    enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})
 
const billingCycleSchema = new mongoose.Schema({ 
    name:{type:String, required:true},
    month: {type:Number, min: 0, max:12, required:true},
    year:{type:Number, min: 1970, max:2200, required:true},
    credit:[creditSchema],
    debts:[debtSchema]
})

 module.exports = restful.model('BillingCycle', billingCycleSchema)   