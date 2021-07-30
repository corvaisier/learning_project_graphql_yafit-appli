import {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString } from 'graphql';

import { courseType } from "../../definition/coursesDataDefinition";
import { coursesData } from '../../db/coursesData';

export const updateCourse = {
  type: courseType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    topic: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, args: any) => {
    coursesData.map(course => {
      if (course.id === args.id) {
        course.topic = args.topic;
        return course;
      }
      return;
    });
    return coursesData.filter(course => course.id === args.id)[0];
  },
};
