"use strict";

const config = require("./config");
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(config.connectionString, // <- YOUR CONNECTION STRING HERE
{ useNewUrlParser:true, useUnifiedTopology: true })
  .then(conn => console.log('Conectado ao Banco'))
  .catch(err => console.log('Falha ao Conectar no banco')) 

  mongoose.Error.messages.general.required = "O atributo '{PATH}' É obrigatório."
  mongoose.Error.messages.Number.min = "O  Valor informado '{VALUE}'  é menor que o limite mínimo de '{MIN}'."
  mongoose.Error.messages.Number.max = "O  Valor informado '{VALUE}'  é maior que o limite mínimo de '{MAX}'."