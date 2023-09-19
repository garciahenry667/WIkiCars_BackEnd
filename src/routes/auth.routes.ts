import { Router } from "express";
import { signinHandler, signupHandler } from "../controllers/auth";

const router = Router();

router.post('/register', signupHandler);
router.post('/login', signinHandler);


export default router;