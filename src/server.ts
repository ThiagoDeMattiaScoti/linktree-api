import express from "express";
import routes from "./routes";
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(routes)

const PORT: any = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server on in ${PORT} port`)
})