import {meth} from "../controllers/creyentesinfo.controllers.js";
import {Router} from "express";

const router = Router();

router.get("/", meth.getAll);
router.get("/:id", meth.getOne);
router.post("/", meth.postCre);
router.delete("/:id", meth.delCre);
router.put("/:id", meth.updCre);

export default router