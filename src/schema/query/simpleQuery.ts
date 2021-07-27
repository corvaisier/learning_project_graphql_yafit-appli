import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
      course(id: Int!): Course,
      courses(topic: String, author: String): [Course]
    }
    type Mutation {
      updateCourseTopic(id: Int!,topic: String!): Course
    }
    type Course {
      id: Int
      title : String
      author: String
      description: String
      topic: String
      url: String
    }
`);

interface NewCourse {
  id: number,
  topic: string,
}

interface GetCourses {
  topic: string,
  author: string,
}

function updateCourseTopic(args: NewCourse) {
  coursesData.map(course => {
    if (course.id === args.id) {
      course.topic = args.topic;
      return course;
    }
    return;
  });
  return coursesData.filter(course => course.id === args.id)[0];
}

function getCourse(id: number) {
  return coursesData.filter(course => {
    return course.id === id;
  })[0];
}

function getCourses(args: GetCourses) {
  if (args.topic) {
    return coursesData.filter(course => course.topic === args.topic);
  }
  if (args.author) {
    return coursesData.filter(course => course.author === args.author);
  }
  return coursesData;
}

export const root = {
  updateCourseTopic: updateCourseTopic,
  course: getCourse,
  courses: getCourses,
};

const coursesData = [
  {
    id: 1,
    title: 'The Complete Node.js Developer Course',
    author: 'Andrew Mead, Rob Percival',
    description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs/',
  },
  {
    id: 2,
    title: 'Node.js, Express & MongoDB Dev to Deployment',
    author: 'Brad Traversy',
    description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/',
  },
  {
    id: 3,
    title: 'JavaScript: Understanding The Weird Parts',
    author: 'Anthony Alicea',
    description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
    topic: 'JavaScript',
    url: 'https://codingthesmartway.com/courses/understand-javascript/',
  },
];
