import express from "express";
import { graphqlHTTP } from 'express-graphql';

import { root, schema } from "../../schema/query/index";

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Express server now running'));

