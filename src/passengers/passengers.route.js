import { Router } from "express";

import {
  findAllPassengers,
  createPassengers,
  getOnePassenger,
  updatePassenger,
  deletePassenger,
} from "./passengers.controller.js";

export const router = Router();

//
//
//

console.log("Buenas tardes iji");

router.route("/").get(findAllPassengers).post(createPassengers);

router
  .route("/:id")
  .get(getOnePassenger)
  .patch(updatePassenger)
  .delete(deletePassenger);

// Endpoint para obtener todos los pasajeros
// router.get("/passengers", findAllPassengers);

// // Endpoint para crear un pasajero

// router.post("/passengers", createPassengers);

// Endpoint para obtener un pasajero

// router.get("/passengers/:id", getOnePassenger);

// // Endpoint para actualizar un pasajero

// router.patch("/passengers/:id", updatePassenger);

// Endpoint para eliminar un pasajero

// router.delete("/passengers/:id", deletePassenger);
