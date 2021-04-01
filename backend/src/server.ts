import express from 'express';
import 'reflect-metadata';
import BodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';

const app = express();

app.use(express.json());
app.use(cors());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  return response.status(200).redirect('/graphql');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 3333 }, () =>
  console.log(`🚀 Server ready on port: ${process.env.PORT || 3333}!`),
);
