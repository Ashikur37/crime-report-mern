import { Router } from "express";
import { getUser, signIn, signUp } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMIddleware";

const router: Router = Router();

router.post('/sign-up',signUp);
router.post('/sign-in',signIn);
router.get('/',authMiddleware,getUser)

export default router;