const router = require("express").Router();

const AlumnoController = require("../controllers/alumno-controller");

// end-points
router.get("/", AlumnoController.findAll);
//router.get("/:id", AlumnoController.findByKey);
//router.post("/", AlumnoController.create);
//router.put("/:id", AlumnoController.update);
//router.delete("/:id", AlumnoController.delete);

module.exports = router;
