const db = require("../db");

/**
 * Muations
 * @type {{addStudent_returns_object: (function(*, *, *, *): Entity), createStudent: (function(*, *, *, *): string), signUp: (function(*, *, *, *): string)}}
 */
const Mutation = {
  /**
   * createStudent
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {string}
   */
  createStudent: (root, args, context, info) => {
    return db.students.create({ collegeId: args.collegeId, firstName: args.firstName, lastName: args.lastName });
  },

  /**
   * addStudent
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {Entity}
   */
  addStudent: (root, args, context, info) => {
    const id = db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName,
    });
    return db.students.get(id);
  },
  /**
   * signUp
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {string}
   */
  signUp: (root, args, context, info) => {
    const { email, firstName, password } = args.input;
    const emailExpression = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@((\'';
    const isValidEmail = emailExpression.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error("email not in proper format");
    if (firstName.length > 15) throw new Error("firstName should be less than 15 characters");
    if (password.length < 8) throw new Error("password should be minimum 8 characters");
    return "success";
  },
};

module.exports = Mutation;
