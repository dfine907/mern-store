import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './routes/product.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json()) //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes)


app.listen(PORT, () => {
  connectDB()
  console.log(`Server listening on port ${PORT} ...`)
})
