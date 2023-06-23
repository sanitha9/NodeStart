const express = require('express')
const loginRouter = require('./src/routes/loginRouter')
const UserRegistrationRouter = require('./src/routes/UserRegRouter')

const app =express()
app.use(express.urlencoded({extended:true}))

app.use('/login',loginRouter)
app.use('/userReg',UserRegistrationRouter)
app.use('/artistReg',UserRegistrationRouter)
app.listen(3000)