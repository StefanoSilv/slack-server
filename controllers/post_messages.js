const db_message = require('../models/message')


module.exports = (req, res) =>{
	db_message.create({
		author: 'Stefano',
		body:'Hello',
		date: '3 Jul 2019'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
