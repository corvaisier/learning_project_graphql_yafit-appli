import { GraphQLObjectType } from 'graphql/type/definition';

import { getCourseById } from './simpleQuery';
import { getCourseByArgs } from './simpleOtherQuery';

export const queries = new GraphQLObjectType({
  name: "Queries",
  fields: () => ({
    getCourseById,
    getCourseByArgs,
  }),
});

