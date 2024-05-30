const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const {
  validaCarrinho,
  validaIdParams,
  validaSapatosCarrinhoPedido,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  carrinhoController.findCarrinhoByIdController
);
router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  carrinhoController.findAllCarrinhosService
);

router.post(
  "/create",
  authMiddleware,
  validaSapatosCarrinhoPedido,
  validaCarrinho,
  carrinhoController.createCarrinhoService
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaCarrinho,
  carrinhoController.updateCarrinhoService
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  carrinhoController.deleteCarrinhoService
);

module.exports = router;
