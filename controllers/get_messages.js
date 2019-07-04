const db_message = require('../models/message')

module.exports = (req, res) => {
	db_message.find({ }).populate({
		path: 'channel',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'name'
	}).sort('-date').then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
