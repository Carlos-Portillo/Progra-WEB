const express = require("express");
const router = express.Router();

const postController = require("../../controllers/post.controllers");

const postValidators = require("../../validators/post.validators");
const runValidators = require("../../validators/index.middleware");

router.get("/", postController.findAll);
router.get("/:identifier", 
    postValidators.findPostByIdValidator,
    runValidators,
    postController.findOneById);

router.post("/", postValidators.createPostValidator, runValidators, postController.create); // encadenamiento de middlewares

module.exports = router;