const db = require("../db");


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
