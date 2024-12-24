import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import Product from './models/product.js'

dotenv.config()

const app = express()

app.use(express.json())

app.post('/api/products', async (req, res) => {
  const product = req.body

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({
        success: false,
        messsage: 'please fill out all fields',
      })
  }
  const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct} )
    } catch (error) {
        console.log("Error in creating product: ", error.messsage)
        res.status(500).json( {success:false, message: "Server error"} )
    }
})

app.listen(5000, () => {
  connectDB()
  console.log('Server listening on port 5000...')
})