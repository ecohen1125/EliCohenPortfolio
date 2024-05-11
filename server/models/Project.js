const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    newTechStack: Array,
    description: String,
    link: String,
});

const ProjectModel = mongoose.model('projects', ProjectSchema);

module.exports = ProjectModel;