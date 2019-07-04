const db_user = require('../models/user.js')
const bcrypt = require('bcrypt')


module.exports = (req, res) =>{
	bcrypt.hash(req.body.password, 10 , (err, encypted) => {
		if(err){
			res.send('You have to insert a valid password')
		}else{
			res.body.password = encrypted
			db_user.create(req.body).then((data) => {
				res.send(data)
			}).catch((err) => {
				res.send(err)
			})
		}
	})
}
