import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
} from "graphql";

import { courseType } from "../../definition/coursesDataDefinition";
import { coursesData } from '../../db/coursesData';

export const getCourseById = new GraphQLObjectType({
  name: 'Query',
  fields: {
    course: {
      type: courseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, args) => {
        return coursesData.filter(course => {
          course.id === args.id;
        })[0];
      },
    },
  },
});
