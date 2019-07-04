const db = require('../db')
const mongoose = require('mongoose')

const db_user = db.model('user', {
	email: {
		type: String,
		required: [true, 'Insert a valid email address']
	},
	password: {
		type: String,
		required: [true, 'A password is required']
	},
	name: {
		type: String,
		required: [true, 'Insert your name']
	}
})

module.exports = db_user
