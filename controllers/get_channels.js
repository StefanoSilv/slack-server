const db_channel = require('../models/channel.js')

module.exports = (req, res) =>{
	db_channel.find({}).then( (data) => {
		res.send(data)
	}).catch( (err)=>{
		res.send(err)
	})
}
