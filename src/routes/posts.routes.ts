import { Router } from "express";
import {carsHandler, catergorieHandler} from "../controllers/createPost"

const router = Router();

router.post("/newCar", carsHandler);
router.post("/newCategorie", catergorieHandler);

export default router;