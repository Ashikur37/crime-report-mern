import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { createCrime, createGuestCrime, crimeList, getCrime } from "../controllers/crimeController";

const router: Router = Router();


router.post('/create',authMiddleware,createCrime);
router.post('/guest-create',createGuestCrime);
//guest-create
router.get('/list',authMiddleware,crimeList);
router.get('/:id',authMiddleware,getCrime);


export default router;