"use strict";

var mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

var Reserva = require('./reserva');

var bcrypt = require('bcrypt');

var saltRounds = 10;
var Schema = mongoose.Schema;

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  return re.test(email);
};

var UsuarioSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'El email es obligatorio'],
    lowercase: true,
    unique: true,
    validate: [validateEmail, 'POr favor, ingrese un email válido'],
    match: [/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/]
  },
  password: {
    type: String,
    required: [true, 'El password es obligatorio']
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
  verificado: {
    type: Boolean,
    "default": false
  }
});
usuarioSchema.plugin(uniqueValidator, {
  message: 'El {PATH} ya existe con otro usuario'
}), usuarioSchema.pre('save', function (next) {
  if (this.isMOdified('password')) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }

  next();
});

usuarioSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

usuarioSchema.methods.reservar = function (biciId, desde, hasta, cb) {
  var reserva = new Reserva({
    usuario: this.id_,
    bicicleta: biciId,
    desde: desde,
    hasta: hasta,
    cd: cd
  });
  console.log(reserva);
  reserva.save(cb);
};

module.exports = mongoose.model('Usuario', usuarioSchema);
//# sourceMappingURL=usuario.dev.js.map
