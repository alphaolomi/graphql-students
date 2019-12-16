const db = require("./db");

const Query = {
  greeting: () => {
    return "hello ql";
  },
  students: () => db.students.list(),

  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  }
};

module.exports = { Query };
