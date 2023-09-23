import { Router } from "express";
import { signinHandler, signupHandler } from "../controllers/auth";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.post('/register', signupHandler);
router.post('/login', signinHandler);
router.post("/verify", verifyToken)

export default router;