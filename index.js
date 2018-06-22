//Codigo por defecto
'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//codigo por defecto

mongoose.connect(config.db, (err, res)=>{
	if(err) {
		return console.log('{message: "error al conectar"}')
	}
	console.log('Conexion correcta')

	app.listen(config.port, () =>{
		console.log(`API REST conrriendo en http://localhost:${config.port}`)
	})
	
})


//termina codigo por defecto