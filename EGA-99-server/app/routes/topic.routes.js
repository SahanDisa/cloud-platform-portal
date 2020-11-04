module.exports = app => {
    const topic = require("../controllers/topic.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", topic.create);
  
    // Retrieve all Tutorials
    router.get("/", topic.findAll);
  
    // Retrieve all published Tutorials
    router.get("/created", topic.findAllCreated);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", topic.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", topic.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", topic.delete);
  
    // Create a new Tutorial
    router.delete("/", topic.deleteAll);
  
    app.use('/api/topic', router);
  };