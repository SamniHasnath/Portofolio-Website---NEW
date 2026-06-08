const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Project = sequelize.define('Project', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  tags: DataTypes.JSON,
  emoji: DataTypes.STRING,
  githubUrl: DataTypes.STRING,
  demoUrl: DataTypes.STRING,
  order: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Project;
