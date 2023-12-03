import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { createCrime, crimeList } from "../controllers/crimeController";

const router: Router = Router();


router.post('/create',authMiddleware,createCrime);
router.get('/list',authMiddleware,crimeList);


export default router;