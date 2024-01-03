import mongoose from 'mongoose';

const basketItemSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    volume: {
      type: String,
    },
    path: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },
});

const OrdersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  basket: [basketItemSchema],
});

const Orders = mongoose.model('Orders', OrdersSchema);

export { Orders };
