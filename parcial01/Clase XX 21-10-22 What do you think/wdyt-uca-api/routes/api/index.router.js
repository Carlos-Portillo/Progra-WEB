const express = require("express");
const router = express.Router();

// Importar los enrutadores
const postRouter = require("./post.router");

// Definir las rutasd
router.use("/post", postRouter);


module.exports = router;