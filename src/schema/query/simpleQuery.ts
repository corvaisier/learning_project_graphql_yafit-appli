import {
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";

import { courseType } from "../../definition/coursesDataDefinition";
import { coursesData } from '../../db/coursesData';

export const getCourseById = {
  type: courseType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_: any, args: any) => {
    return coursesData.filter(course => {
      return course.id === args.id;
    })[0];
  },
};
