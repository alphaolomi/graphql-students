const db = require("./db");
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
    }
};

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
        return db.students.create({collegeId: args.collegeId, firstName: args.firstName, lastName: args.lastName});
    },

    /**
     * addStudent_returns_object
     * @param root
     * @param args
     * @param context
     * @param info
     * @returns {Entity}
     */
    addStudent_returns_object: (root, args, context, info) => {
        const id = db.students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
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
        const {email, firstName, password} = args.input;
        const emailExpression = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@((\'';
        const isValidEmail = emailExpression.test(String(email).toLowerCase());
        if (!isValidEmail) throw new Error("email not in proper format");
        if (firstName.length > 15) throw new Error("firstName should be less than 15 characters");
        if (password.length < 8) throw new Error("password should be minimum 8 characters");
        return "success";
    }
};

/**
 * Student
 * @type {{college: (function(*): Entity), fullName: (function(*, *, *, *): string)}}
 */
const Student = {
    fullName: (root, args, context, info) => {
        return root.firstName + ":" + root.lastName;
    },
};

module.exports = {Query, Student};
