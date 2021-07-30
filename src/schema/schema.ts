import { GraphQLSchema } from "graphql";

import { mutations } from "./mutation";
import { queries } from "./query";


export const schema = new GraphQLSchema({
  query:  queries,
  mutation: mutations,
});
