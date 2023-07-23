import {meth} from "../controllers/creyentesinfo.controllers.js";
import {Router} from "express";

const router = Router();

router.get("/a", meth.getAll);
router.post("/p", meth.postCre);
router.delete("/d/:id", meth.delCre);
router.put("/u/:id", meth.updCre);

export default router