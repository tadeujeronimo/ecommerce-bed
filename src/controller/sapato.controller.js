const sapatoService = require("../service/sapato.service");

const findShoeByIdController = async (req, res) => {
  try {
    res.send(await sapatoService.findShoeByIdService(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const findAllShoescontroller = async (req, res) => {
  try {
    res.send(
      await sapatoService.findAllShoesService(req.query.limit, req.query.offset)
    );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const createShoeController = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId,
    };

    res.status(201).send(await sapatoService.createShoeService(corpo));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const updateShoeController = async (req, res) => {
  try {
    res.send(await sapatoService.updateShoeService(req.params.id, req.body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const deleteShoeController = async (req, res) => {
  try {
    res.send(await sapatoService.deleteShoeService(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const addCategoriaSapatoController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await sapatoService.addCategoriaSapatoService(req.params.id, req.body)
      );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const removeCategoriaSapatoController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await sapatoService.removeCategoriaSapatoService(
          req.params.id,
          req.body
        )
      );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const addMarcaSapatoController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await sapatoService.addMarcaSapatoService(req.params.id, req.body)
      );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const removeMarcaSapatoController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await sapatoService.removeMarcaSapatoService(
          req.params.id,
          req.body
        )
      );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

module.exports = {
  findShoeByIdController,
  findAllShoescontroller,
  createShoeController,
  updateShoeController,
  deleteShoeController,
  addCategoriaSapatoController,
  removeCategoriaSapatoController,
  addMarcaSapatoController,
  removeMarcaSapatoController,
};
