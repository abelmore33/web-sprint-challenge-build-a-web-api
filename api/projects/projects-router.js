// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "No data" });
    });
});

router.get("/:id", (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Project not found",
      });
    });
});

module.exports = router;
