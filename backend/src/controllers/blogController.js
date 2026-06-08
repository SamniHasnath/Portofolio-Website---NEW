const BlogPost = require('../models/BlogPost');

const getPosts = async (req, res) => {
  const posts = await BlogPost.findAll({ order: [['createdAt', 'DESC']] });
  res.json(posts);
};

module.exports = { getPosts };
