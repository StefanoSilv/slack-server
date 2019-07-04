const db = require('../db')
const mongoose = require('mongoose')

const db_user = db.model('message', {
	email: {
		type: String,
		required: [true, 'Insert a valid email address']
	},
	password: {
		type: String,
		required: [true, 'A password is required']
	},
	name: {
		type: String
	}
})

module.exports = db_user
