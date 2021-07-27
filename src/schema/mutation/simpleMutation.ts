import { GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString } from 'graphql';

import { courseType } from "../../definition/coursesDataDefinition";
import { coursesData } from '../../db/coursesData';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateCourse: {
      type: courseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        topic: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        coursesData.map(course => {
          if (course.id === args.id) {
            course.topic = args.topic;
            return course;
          }
          return;
        });
        return coursesData.filter(course => course.id === args.id)[0];
      },
    },
  },
});
