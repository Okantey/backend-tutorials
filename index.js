import dotenv from "dotenv"
import express from "express"
import connectDatabase from "./database/connect.js"
dotenv.config()

const app = express()
connectDatabase()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
}
)




