const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const marcaController = require("../controller/marca.controller");
const {
  validaMarca,
  validaIdParams,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  marcaController.findMarcaByIdController
);
router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  marcaController.findAllMarcaController
);

router.post(
  "/create",
  authMiddleware,
  validaMarca,
  marcaController.createMarcaController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaMarca,
  marcaController.updateMarcaController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  marcaController.deleteMarcaController
);

module.exports = router;
