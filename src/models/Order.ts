import mongoose, { Schema, Document } from 'mongoose';

export interface OrderItem {
  name: string;
  quantity: number;
  categoryId: string;
  categoryName: string;
}

export interface OrderDocument extends Document {
  fullName: string;
  address: string;
  email: string;
  items: OrderItem[];
}

const OrderItemSchema = new Schema<OrderItem>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  categoryId: { type: String, required: true },
  categoryName: { type: String, required: true }
}, { _id: false });

const OrderSchema = new Schema<OrderDocument>({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  items: { type: [OrderItemSchema], required: true }
}, {
  timestamps: true
});

export const OrderModel = mongoose.model<OrderDocument>('Order', OrderSchema);
