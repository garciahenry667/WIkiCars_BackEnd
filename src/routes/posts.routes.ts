import { Router } from "express";
import {carsHandler} from "../controllers/createPost"

const router = Router();

router.post("/newCar", carsHandler)

export default router;