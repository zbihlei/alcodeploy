import mongoose from 'mongoose';

const SubcategoriesSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
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
  description: {
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
  subtype : {
    type: String,
    required: true,
  }  
 
});

const Beer = mongoose.model('Beer', SubcategoriesSchema);
const Energetic = mongoose.model('Energetic', SubcategoriesSchema);
const Coctail = mongoose.model('Coctail', SubcategoriesSchema);
const Craft = mongoose.model('Craft', SubcategoriesSchema);
const Whiskey = mongoose.model('Whiskey', SubcategoriesSchema);
const Wine = mongoose.model('Wine', SubcategoriesSchema);

export { Beer, Energetic, Coctail, Craft, Whiskey, Wine };
