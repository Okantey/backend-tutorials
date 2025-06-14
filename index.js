import dotenv from "dotenv"
import express from "express"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/api/register", (req, res) => {
  const { email, password, phoneNumber } = req.body
  console.log(email, password, phoneNumber)


  res.status(200).json({
    message: "account successfully created",
    user: { email, phoneNumber }
  })
})

app.listen(PORT, () => {
  console.log('My name is Anita')
}
)




