const Project = require('../models/Project');

const getProjects = async (req, res) => {
  const projects = await Project.findAll({ order: [['order', 'ASC']] });
  res.json(projects);
};

module.exports = { getProjects };
