  import General from './models/General.model.js';
  import { Lite, Strong } from './models/Categories.model.js';
  import {Beer, Coctail, Energetic, Craft, Whiskey, Wine} from './models/Subcategories.model.js';
  import { Orders } from './models/Orders.model.js';


  const resolvers = {
    Query: {
        getGeneral: async () => {
          return await General.find();
        },
        getLite: async () => {
          return await Lite.find();
        },
        getStrong: async () => {
          return await Strong.find();
        },
        getBeer: async () => {
          return await Beer.find();
        },
        getEnergetic: async () => {
          return await Energetic.find();
        },
        getCoctail: async () => {
          return await Coctail.find();
        },
        getCraft: async () => {
          return await Craft.find();
        },
        getWhiskey: async () => {
          return await Whiskey.find();
        },
        getWine: async () => {
          return await Wine.find();
        },
        getBeerById: async (_, { id }) => {
          return await  Beer.findById(id);
        },
        getCoctailById: async (_, { id }) => {
          return await  Coctail.findById(id);
        },
        getEnergeticById: async (_, { id }) => {
          return await  Energetic.findById(id);
        },
        getCraftById: async (_, { id }) => {
          return await  Craft.findById(id);
        },
        getWhiskeyById: async (_, { id }) => {
          return await  Whiskey.findById(id);
        },
        getWineById: async (_, { id }) => {
          return await  Wine.findById(id);
        },
        getAllOrders: async () => {
          return await  Orders.find();
        },
        getOrdersByEmail: async (_, { email }) => {
          try {
            const orders = await Orders.find({ email: email });
            return orders;
          } catch (error) {
            console.error('Failed to get orders by email:', error);
            throw new Error('Failed to get orders by email');
          }
        },
       
    searchByName: async (_, { name }) => {
      const beerResults = await Beer.find({ name: { $regex: name, $options: 'i' } });
      const energeticResults = await Energetic.find({ name: { $regex: name, $options: 'i' } });
      const coctailResults = await Coctail.find({ name: { $regex: name, $options: 'i' } });
      const craftResults = await Craft.find({ name: { $regex: name, $options: 'i' } });
      const whiskeyResults = await Whiskey.find({ name: { $regex: name, $options: 'i' } });
      const wineResults = await Wine.find({ name: { $regex: name, $options: 'i' } });

      return {
        beer: beerResults,
        energetic: energeticResults,
        coctail: coctailResults,
        craft: craftResults,
        whiskey: whiskeyResults,
        wine: wineResults,
      };
    },      
  },
  Mutation: {
    createOrder: async (_, args) => {
      const { firstname, surname, email, phone, date, status, basket } = args.input;
  
      const transformedBasket = basket.map(item => ({
        _id: item._id,
        name: item.name,
        type: item.type,
        image: item.image,
        price: item.price,
        volume: item.volume,
        path: item.path,
        quantity: item.quantity,
      }));
  
      const newOrder = new Orders({
        firstname,
        surname,
        email,
        phone,
        date,
        status,
        basket: transformedBasket,
      });
  
      try {
        const savedOrder = await newOrder.save();
        return savedOrder.toObject();
      } catch (error) {
        console.error('Failed to create order:', error);
        throw new Error('Failed to create order');
      }
    },
    updateOrderStatus: async (_, { orderId, newStatus }) => {
      try {
        const updatedOrder = await Orders.findByIdAndUpdate(
          orderId,
          { status: newStatus },
          { new: true }
        );

        if (!updatedOrder) {
          throw new Error('Order not found');
        }

        return {
          _id: updatedOrder._id,
          status: updatedOrder.status,
        };
      } catch (error) {
        console.error('Failed to update order status:', error);
        throw new Error('Failed to update order status');
      }
    }

  }
  
}

export default resolvers;