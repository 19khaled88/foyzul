import express from 'express'
import cors from 'cors'
import connectDb from './server.js'
import configure from './controller/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectDb(app)

configure(app)


// app.listen(process.env.PORT,()=>{
//     console.log(`Listening to port ${process.env.PORT}`)
// })