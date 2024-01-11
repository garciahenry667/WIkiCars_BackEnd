import { Router } from "express";
import {carsHandler, catergorieHandler} from "../controllers/createPost"
import { deleteCarsHandler } from "../controllers/deletePost";

const router = Router();

router.post("/newCar", carsHandler);
router.post("/newCategorie", catergorieHandler);
router.put("/deleteCar", deleteCarsHandler);

export default router;