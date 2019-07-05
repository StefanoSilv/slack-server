const db_message = require('../models/message')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.channel) {
		q.channel = req.query.channel
	}
	db_message.find({q}).populate({
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
