const db = require('../db.js')
const db_message = require('../models/message.js')

module.exports = (req, res) =>{
	db_message.find({}).then( (data) => {
		res.send(data)
	}).catch( (err)=>{
		
	})
}
