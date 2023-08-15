import { Router } from "express";
import { signupHandler, signinHandler } from "../controllers/auth.controllers";

const router = Router()

router.post('/signup', signupHandler);

router.post('/signin', signinHandler);

export default router;