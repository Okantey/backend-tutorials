import dotenv from "dotenv"
import express from "express"
import connectDatabase from "./database/connect.js"
import { postRoutes } from "./routes/posts.routes.js"
import errorHandler from "./middlewares/error.middleware.js"
dotenv.config()

const app = express()
connectDatabase()
const PORT = process.env.PORT



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//posts endpoint
app.use("/api/v1/posts", postRoutes)

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
}
)




