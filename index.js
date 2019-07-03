const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()


app.get('/api/messages', (req,res)=> { res.send('Hello') })








app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
