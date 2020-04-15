const db = require("../db");

/**
 * Query
 * @type {{studentById: (function(*, *, *, *): Entity), sayHello: (function(*, *, *, *): string), greeting: (function(): string), students: (function(): Entity[]), setFavouriteColor: (function(*, *): string)}}
 */
const Query = {
  /**
   * ping
   * @returns {string}
   */
  ping: () => {
    return "pong";
  },


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
   * colleges
   * @returns {Entity[]}
   */
  colleges: () => db.colleges.list(),

  /**
   * collegeById
   * @param root
   * @param args
   * @param context
   * @param info
   * @returns {Entity}
   */
  collegeById: (root, args, context, info) => {
    return db.colleges.get(args.id);
  },
 
};


module.exports = Query;