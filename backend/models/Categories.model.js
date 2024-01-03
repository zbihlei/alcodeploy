import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Lite = mongoose.model('Lite', CategoriesSchema);
const Strong = mongoose.model('Strong', CategoriesSchema);

export { Lite, Strong };
