const Joi = require("joi");

const choferSchema = Joi.object().keys({
  nombre: Joi.string().required().min(2).max(255).messages({
    "any.required": "nombre es requerido",
    "string.min": "el nombre debe tener como mínimo {#limit} caracteres",
    "string.max": "el nombre debe tener como máximo {#limit} caracteres",
    "string.empty": "nombre no puede estar vacío",
  }),
  apellido: Joi.string().required().min(2).max(255).messages({
    "any.required": "apellido es requerido",
    "string.min": "el apellido debe tener como mínimo {#limit} caracteres",
    "string.max": "el apellido debe tener como máximo {#limit} caracteres",
    "string.empty": "apellido no puede estar vacío",
  }),
  dni: Joi.string().required().min(8).max(8).messages({
    "any.required": "dni es requerido",
    "string.min": "el dni debe tener como mínimo {#limit} caracteres",
    "string.max": "el dni debe tener como máximo {#limit} caracteres",
    "string.empty": "dni no puede estar vacío",
  }),
  licencia: Joi.string().required().min(8).max(8).messages({
    "any.required": "licencia es requerido",
    "string.min": "la licencia debe tener como mínimo {#limit} caracteres",
    "string.max": "la licencia debe tener como máximo {#limit} caracteres",
    "string.empty": "licencia no puede estar vacío",
  }),
  telefono: Joi.string().required().min(10).max(10).messages({
    "any.required": "telefono es requerido",
    "string.min": "el telefono debe tener como mínimo {#limit} caracteres",
    "string.max": "el telefono debe tener como máximo {#limit} caracteres",
    "string.empty": "telefono no puede estar vacío",
  }),
  fecha_nacimiento: Joi.date().less("now").required().messages({
    "any.required": "La fecha de nacimiento es requerida",
    "date.base": "La fecha de nacimiento debe ser una fecha válida",
    "date.less": "La fecha de nacimiento debe ser en el pasado",
  }),
  id_empresa_transportista: Joi.number().integer().required().messages({
    "any.required": "El ID de la empresa transportista es requerido",
    "number.base": "El ID debe ser un número",
    "number.integer": "El ID debe ser un número entero",
  }),
  estado: Joi.string().required().min(8).max(9).messages({
    "any.required": "estado es requerido",
    "string.min": "el estado debe tener como mínimo {#limit} caracteres",
    "string.max": "el estado debe tener como máximo {#limit} caracteres",
    "string.empty": "estado no puede estar vacío",
  }),
  observaciones: Joi.string().required().min(8).max(299).messages({
    "any.required": "observaciones es requerido",
    "string.min":
      "las observaciones debe tener como mínimo {#limit} caracteres",
    "string.max":
      "las observaciones debe tener como máximo {#limit} caracteres",
    "string.empty": "observaciones no puede estar vacío",
  }),
});

module.exports = choferSchema;
