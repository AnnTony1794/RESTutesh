'use strict'

//Modelos mongoose
const Noticia = require("../models/noticias") 

function getNoticia(req, res){

	let noticiaId = req.params.id

	Noticia.findById(noticiaId, (err, noticia) =>{
		if(err) return res.status.send({message: `Error: ${err}`})
		if(!noticia) return res.status(404).send({message: "Not found"})
		res.status(200).send({noticia})
	})
}

function getNoticias(req, res){

	Noticia.find({}, (err, noticias)=>{

		if(err) return res.status.send({message: `Error: ${err}`})
		if(!noticias) return res.status(404).send({message: "Not found"})
		res.status(200).send({noticias})
	})
}

function postNoticia(req, res){
	console.log(req.body)

	let noticia = new Noticia()
	noticia.name = req.body.name
	noticia.content = req.body.content
	noticia.category = req.body.category
	noticia.date = req.body.date

	noticia.save((err, productStored) =>{
		if(err) res.status(500).send({message: `Error al guardar: ${err}`})
		
		res.status(200).send({noticia: productStored})
	})
}

function putNoticia(req, res){
	let noticiaId = req.params.id
	let update = req.body

	Noticia.findByIdAndUpdate(noticiaId, update, (err, noticiaUd)=>{
		if(err) res.status(500).send({message: "Error al actualizar."})
		
		res.status(200).send({noticia: noticiaUd})
	})
}

function deleteNoticia(req, res){
	let noticiaId = req.params.id

	Noticia.findById(noticiaId, (err, noticia) =>{
		if(err) return res.status.send({message: `Error: ${err}`})
		if(!noticia) return res.status(404).send({message: "Not found"})

		noticia.remove(err =>{
			if(err) {
				res.status(500).send({message: "Error al eliminar."}) 
			}

		res.status(200).send({message: "Eliminado correctamente"})
		})
	})

}


module.exports = {
	getNoticia,
	getNoticias,
	postNoticia,
	putNoticia,
	deleteNoticia
}