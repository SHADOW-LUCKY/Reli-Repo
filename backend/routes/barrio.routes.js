import { Router } from "express";
import { methodHTTP as barrioController } from "../controllers/barrio.controllers.js";

const router = Router();

router.get("/", barrioController.getAll);
router.post("/", barrioController.add);
router.delete("/:id", barrioController.del);
router.get("/:id", barrioController.getOne);
router.put("/:id", barrioController.upd);

export default router;