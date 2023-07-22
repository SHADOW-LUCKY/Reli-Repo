import { Router } from "express";
import { methodHTTP as comunaController } from "../controllers/comuna.controllers.js";

const router = Router();

router.get("/", comunaController.getAll);
router.post("/", comunaController.add);
router.delete("/:id", comunaController.del);
router.get("/:id", comunaController.getOne);
router.put("/:id", comunaController.upd);

export default router;