import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { allCrimeList, assignInvestigator, createInvestigator, getCrime, investigaorList } from "../controllers/adminController";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const router: Router = Router();

router.get('/crime/list',adminMiddleware,allCrimeList);
router.get('/crime/:id',adminMiddleware,getCrime);
router.get('/investigator/list',adminMiddleware,investigaorList);
router.post('/investigator/create',adminMiddleware,createInvestigator);
router.post('/investigator/assign',adminMiddleware,assignInvestigator);

//assignInvestigator



export default router;