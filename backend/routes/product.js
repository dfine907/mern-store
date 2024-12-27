import express from 'express'
import mongoose from 'mongoose'

import Product from '../models/Product.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({})
    res
      .status(200)
      .json({ success: true, products, count: products.length })
  } catch (error) {
    console.log('Error in getting products: ', error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

router.post('/', async (req, res) => {
  const product = req.body

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      messsage: 'please fill out all fields',
    })
  }
  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    console.log('Error in creating product: ', error.messsage)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})


router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const product = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'Product not found' })
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      product,
      { new: true }
    )
    res.status(200).json({ success: true, data: updatedProduct })
  } catch (error) {
    console.log('Error in updating product: ', error.message)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      await Product.findByIdAndDelete(id)
      res
        .status(200)
        .json({ success: true, message: 'Product was deleted' })
    } catch (error) {
      console.log('Error in deleting product: ', error.message)
      res
        .status(404)
        .json({ success: false, message: 'Your product was not found' })
    }
  })

export default router
