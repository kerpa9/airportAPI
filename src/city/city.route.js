import { Router } from "express";
import { createCity } from "./city.controler.js";

export const router = Router();

router.route("/").post(createCity);
