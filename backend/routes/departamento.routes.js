import { Router } from "express";
import { methodHTTP as departamentoController } from "../controllers/departamento.controllers.js";

const router = Router();

router.get("/", departamentoController.getAll);
router.post("/", departamentoController.add);
router.delete("/:id", departamentoController.del);
router.get("/:id", departamentoController.getOne);
router.put("/:id", departamentoController.upd);

export default router;