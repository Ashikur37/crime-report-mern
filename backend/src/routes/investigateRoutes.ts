import { Router } from "express";
import { authMiddleware } from "../middlewares/authMIddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { investigatorMiddleware } from "../middlewares/investigatorMiddleware";
import { allCrimeList, updateCrime } from "../controllers/investigatorController";
import { getCrime } from "../controllers/adminController";

const router: Router = Router();

router.get('/crime/list',investigatorMiddleware,allCrimeList);
router.get('/crime/:id',investigatorMiddleware,getCrime);
router.post('/crime/update',investigatorMiddleware,updateCrime);



//assignInvestigator



export default router;