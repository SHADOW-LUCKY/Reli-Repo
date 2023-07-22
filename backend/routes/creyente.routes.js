import { Router } from "express";
import { methodHTTP as creyenteController } from "../controllers/creyente.controllers.js";

const router = Router();

router.get("/", creyenteController.getAll);
router.post("/", creyenteController.add);
router.delete("/:id", creyenteController.del);
router.get("/:id", creyenteController.getOne);
router.put("/:id", creyenteController.upd);

export default router;