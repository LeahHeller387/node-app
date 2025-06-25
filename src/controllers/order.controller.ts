import { Request, Response } from 'express';
import { OrderModel } from '../models/Order';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { fullName, address, email, items } = req.body;

    if (!fullName || !address || !email || !Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: 'Missing required fields or empty cart' });
      return;
    }

    const newOrder = new OrderModel({
      fullName,
      address,
      email,
      items,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order saved successfully!' });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Failed to save order' });
  }
};
