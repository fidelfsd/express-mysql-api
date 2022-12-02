const Alumno = require("../models/alumno");

const AlumnoController = {};

AlumnoController.findAll = (req, res) => {
   Alumno.findAll("alumno", (error, response) => {
      if (response) {
         res.json(response);
      } else {
         res.status(404).send({
            message: `Cannot find Students`,
         });
         console.log(error);
      }
   });
};

module.exports = AlumnoController;
