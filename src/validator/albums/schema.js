const Joi = require('joi');

const currentYear = new Date().getFullYear();
const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(currentYear)
    .required(),
});
const AlbumCoverPayloadSchema = Joi.object({
  'content-type': Joi.string().valid('image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/webp', 'image/jpg').required(),
}).unknown();

module.exports = { AlbumPayloadSchema, AlbumCoverPayloadSchema };
