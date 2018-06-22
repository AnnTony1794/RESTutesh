'use strict'

const express = require('express')
const NoticiaControler = require("../controllers/noticiaController")
const api = express.Router()

api.get('/', (req, res) =>{
	res.status(200).send({message: "RESTful UTE"})
})

//GET
//Todas las noticias
api.get('/noticias', NoticiaControler.getNoticias)

//Una noticia
api.get('/noticias/:id', NoticiaControler.getNoticia)

//POST
//Agregar una noticia
api.post('/noticias', NoticiaControler.postNoticia)

//PUT
//Modificar una noticia
api.put('/noticias/:id', NoticiaControler.putNoticia)


//DELETE
//Eliminar una noticia
api.delete('/noticias/:id', NoticiaControler.deleteNoticia)


module.exports = api