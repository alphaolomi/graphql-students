'use strict';
module.exports = (sequelize, DataTypes) => {
  const College = sequelize.define('College', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.DOUBLE
  }, {});
  College.associate = function(models) {
    College.hasMany(models.Students, {
      foreignKey: 'collegeId',
      as: 'students',
      onDelete: 'CASCADE',
    });
  };
  return College;
};