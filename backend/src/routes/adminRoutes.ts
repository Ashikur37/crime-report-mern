import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { allCrimeList } from "../controllers/adminController";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const router: Router = Router();

router.get('/crime/list',adminMiddleware,allCrimeList);


export default router;