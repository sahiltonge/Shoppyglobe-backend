// routes/cartRoutes.js
const express = require('express');
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

// Protect all routes
router.use(authenticate);

// Add item to cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity == null) {
      return res.status(400).json({ success: false, message: 'Product ID and quantity required' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const cartItem = new CartItem({ productId, quantity });
    await cartItem.save();

    res.status(201).json({ success: true, data: cartItem });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/:id', async (req, res) => {
  try {
    const { quantity } = req.body;

    const updated = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Cart item not found' });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete item from cart
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CartItem.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Cart item not found' });
    }

    res.json({ success: true, message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
