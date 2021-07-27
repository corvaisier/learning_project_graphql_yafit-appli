import { GraphQLSchema } from "graphql";
import { mutationType } from "./mutation/simpleMutation";
import * as queries from "./query";


export const schema = new GraphQLSchema({
  query:  queries,
  mutation: mutationType,
});
