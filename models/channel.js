const db = require('../db.js')

const db_channel = db.model('channel' , {
	name: String,
})

module.exports = db_channel
