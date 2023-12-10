import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { createCrime, createGuestCrime, crimeList } from "../controllers/crimeController";

const router: Router = Router();


router.post('/create',authMiddleware,createCrime);
router.post('/guest-create',createGuestCrime);
//guest-create
router.get('/list',authMiddleware,crimeList);


export default router;