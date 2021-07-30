import {
  GraphQLString,
  GraphQLNonNull,
} from "graphql";

import { courseType } from "../../definition/coursesDataDefinition";
import { coursesData } from '../../db/coursesData';

export const getCourseByArgs = {
  type: courseType,
  args: {
    topic: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, args: any) => {
    if (args.topic) {
      return coursesData.filter(course => course.topic === args.topic);
    }
    if (args.author) {
      return coursesData.filter(course => course.author === args.author);
    }
    return coursesData;
  },
};
