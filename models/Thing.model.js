const { Schema, model } = require('mongoose')

const thingSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [5, 'El nombre debe tener mínimo 5 caracteres'],
      trim: true,
      required: [true, 'Indica el nombre'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Indica el email'],
      unique: true,
      lowercase: true,
      trim: true
    },
    imageUrl: {
      type: String,
      required: [true, 'Incluye la URL a tu avatar.']
    },
    rating: {
      type: Number,
      min: [10, 'Solo ratings +10'],
      required: [true, 'Indica la puntuación']
    },
    code: {
      type: String,
      match: [/[0-9]{4}[A-Z]{2}/, 'El código debe contener cuatro dígitos y dos letras'],
      required: [true, 'Indica tu código de acceso']
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Thing', thingSchema)