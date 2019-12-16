const db = require("./db");

const Query = {
  greeting: () => {
    return "hello ql";
  },

  sayHello: (root, args, context, info) => `Hi ${args.name} GraphQL server says Hello to you!!`,

  students: () => db.students.list(),

  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  setFavouriteColor: (root, args) => {
    return "Your Fav Color is :" + args.color;
  }
};

const Mutation = {
  createStudent: (root, args, context, info) => {
    return db.students.create({ collegeId: args.collegeId, firstName: args.firstName, lastName: args.lastName });
  },
  addStudent_returns_object: (root, args, context, info) => {
    const id = db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName
    });
    return db.students.get(id);
  },

  signUp: (root, args, context, info) => {
    const { email, firstName, password } = args.input;
    const emailExpression = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@((\'';
    const isValidEmail = emailExpression.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error("email not in proper format");
    if (firstName.length > 15) throw new Error("firstName should be less than 15 characters");
    if (password.length < 8) throw new Error("password should be minimum 8 characters");
    return "success";
  }
};

const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName;
  },
  college: root => {
    return db.colleges.get(root.collegeId);
  }
};

module.exports = { Query, Student };
