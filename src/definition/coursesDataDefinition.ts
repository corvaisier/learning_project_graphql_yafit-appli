import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql";

export const courseType = new GraphQLObjectType({
  name: 'coursesData',
  fields: {
    id: { type: GraphQLInt},
    title: { type: GraphQLString},
    author: { type: GraphQLString},
    description: { type: GraphQLString},
    topic: { type: GraphQLString},
    url: { type: GraphQLString},
  },
});
