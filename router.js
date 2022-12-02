const router = require("express").Router();

// rutas alumno en views
const AlumnoRouter = require("./views/alumno-router");
//const NacionalidadRouter = require("   ......... ");

// Rutas
// users
router.use("/users", AlumnoRouter);

//nacionalidad
//router.use("/nacionalidad", NacionalidadRouter);

module.exports = router;
