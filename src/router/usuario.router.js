const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

const authMiddleware = require("../middleware/auth.middleware");
const {
  validaUsuario,
  validaEndereco,
  validaIdParams,
  valida_IdBody,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas GET
router.get(
  "/findById/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.findUserByIdController
);
router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  usuarioController.findAllUsersController
);

//rotas POST
router.post("/create", validaUsuario, usuarioController.createUserController);
router.post(
  "/addAddress/:id",
  authMiddleware,
  validaIdParams,
  validaEndereco,
  usuarioController.addUserAddressController
);
router.post(
  "/addFavShoe/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  usuarioController.addUserFavShoeController
);

//rotas PUT
router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaUsuario,
  usuarioController.updateUserController
);

//rotas DELETE
router.delete(
  "/remove/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.removeUserController
);
router.delete(
  "/removeAddress",
  authMiddleware,
  usuarioController.removeUserAddressController
);
router.delete(
  "/removeFavShoe/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.removeUserFavShoeController
);

module.exports = router;
