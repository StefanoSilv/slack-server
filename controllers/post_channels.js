const db_channel = require('../models/channel.js')


module.exports = (req, res) =>{
	db_channel.create({
		name: 'Threads'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
