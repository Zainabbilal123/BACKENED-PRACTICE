const express = require('express')
const app = express()
const port = 3000
// loading middleware into app
app.use(express.json())
 const route = require('./route')
app.use('/api',route)
app.get('/',(req,res) => {
    console.log(req.body);
    res.send('hello world')
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})