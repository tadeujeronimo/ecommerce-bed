const router = require("express").Router();

const sapatoController = require("../controller/sapato.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaSapato,
  validaIdParams,
  valida_IdBody,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  sapatoController.findShoeByIdController
);
router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  sapatoController.findAllShoescontroller
);

router.post(
  "/create",
  authMiddleware,
  validaSapato,
  sapatoController.createShoeController
);
router.post(
  "/addCategoria/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  sapatoController.addCategoriaSapatoController
);
router.post(
  "/addMarca/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  sapatoController.addMarcaSapatoController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaSapato,
  sapatoController.updateShoeController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  sapatoController.deleteShoeController
);
router.delete(
  "/removeCategoria/:id",
  authMiddleware,
  validaIdParams,
  sapatoController.removeCategoriaSapatoController
);
router.delete(
  "/removeMarca/:id",
  authMiddleware,
  validaIdParams,
  sapatoController.removeMarcaSapatoController
);

module.exports = router;
