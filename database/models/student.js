'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    collegeId: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsTo(models.College, {
      foreignKey: 'collegeId',
      as: 'college',
      onDelete: 'CASCADE',
    })
  };
  return Student;
};