import { Router } from "express";
import { methodHTTP as municipioController } from "../controllers/municipio.controllers.js";

const router = Router();

router.get("/", municipioController.getAll);
router.post("/", municipioController.add);
router.delete("/:id", municipioController.del);
router.get("/:id", municipioController.getOne);
router.put("/:id", municipioController.upd);

export default router;