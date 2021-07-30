import { GraphQLObjectType } from 'graphql';

import { updateCourse } from './simpleMutation';

export const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    updateCourse,
  }),
});

