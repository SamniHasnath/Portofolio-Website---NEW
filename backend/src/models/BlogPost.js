const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BlogPost = sequelize.define('BlogPost', {
  title: { type: DataTypes.STRING, allowNull: false },
  excerpt: DataTypes.TEXT,
  tag: DataTypes.STRING,
  tagColor: DataTypes.STRING,
  emoji: DataTypes.STRING,
  bannerBg: DataTypes.STRING,
  date: DataTypes.STRING,
  readTime: DataTypes.STRING,
  href: DataTypes.STRING,
});

module.exports = BlogPost;
