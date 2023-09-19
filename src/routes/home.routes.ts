import { Router } from "express";
import homePage from "../controllers/home";

const router = Router();

router.get("/home", homePage)

export default router;

