import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import mongoose from 'mongoose';
import cors from 'cors';

const name = process.env.NAME;
const password = process.env.PASS;

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: "https://alcodeploy-frontend.vercel.app",
      credentials: true
    }
  });
  

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });

  app.use(cors({
    origin: ["https://alcodeploy-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }));
  
  app.options('*', cors({
    origin: "https://alcodeploy-frontend.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
  }));
  

  app.use(express.json());

  app.use((req, res) => {
    res.send('hello from express apollo server');
  });

  try {
    await mongoose.connect(`mongodb+srv://${name}:${password}@cluster0.rud9g1z.mongodb.net/alco`);
    console.log('mongoose connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  

  app.listen(4000, () => console.log('server is running on port 4000'));
}

startServer();
