const express = require("express");
const router = require("./router");

const app = express();
const PORT = 3000;

// recibir json
app.use(express.json());

// rutas
app.get("/", (req, res) => {
   //localhost:3000
   res.send("Express GeeksHubs API");
});

app.use(router);

// iniciar servidor
app.listen(PORT, () => {
   console.log(`Listening in port ${PORT}`);
});

// app.get("/users", (req, res) => {
//    Alumno.findAll("alumnossssssss", (error, response) => {
//       if (response) {
//          res.json(response);
//       } else {
//          res.status(404).send({
//             message: `Cannot find Students`,
//          });
//          console.log(error);
//       }
//    });
// });

//app.get("/users", AlumnoController.findAll  );

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// app.get("/users/:id", (req, res) => {
//    console.log(req.params.id);
//    res.json(data.users[req.params.id - 1]);
//    //res.send(`User ${req.params.id}`);
// });

// app.post("/users", (req, res) => {
//    console.log(req.body.scripts.test);
//    res.send("POST recibido");
// });
