const Model = require("./model");

class Alumno extends Model {
   #name;
   #lastName;
   #age;
   #birthDate;
   #active;
   #idNationality;

   constructor(name, lastName, age, birthDate, active, idNationality) {
      this.#name = name;
      this.#lastName = lastName;
      this.#age = age;
      this.#birthDate = birthDate;
      this.#active = active;
      this.#idNationality = idNationality;
   }
}

module.exports = Alumno;
