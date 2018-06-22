'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoticiaSchema = Schema({
	name: String,
	content: String,
	date: String,
	category: {
		type: String, enum: ['becas', 'inscripcion', 'eventos', 'noticia', '-1']
	}
})

module.exports = mongoose.model('Noticia', NoticiaSchema)