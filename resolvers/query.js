const db = require("../db");

/**
 * Query
 * @type {{studentById: (function(*, *, *, *): Entity), sayHello: (function(*, *, *, *): string), greeting: (function(): string), students: (function(): Entity[]), setFavouriteColor: (function(*, *): string)}}
 */
const Query = {
  /**
   * greeting
   * @returns {string}
   */
  greeting: () => {
    return "hello ql";
  },

  /**
   * sayHello
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {string}
   */
  sayHello: (root, args, context, info) => `Hi ${args.name} GraphQL server says Hello to you!!`,

  /**
   * students
   * @returns {Entity[]}
   */
  students: () => db.students.list(),

  /**
   * studentById
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {Entity}
   */
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  /**
   * setFavouriteColor
   * @param root
   * @param args
   * @returns {string}
   */
  setFavouriteColor: (root, args) => {
    return "Your Fav Color is :" + args.color;
  },
};


module.exports = Query;