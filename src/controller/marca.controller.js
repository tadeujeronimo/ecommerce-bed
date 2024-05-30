const marcaService = require("../service/marca.service");

const findMarcaByIdController = async (req, res) => {
  try {
    res
      .status(200)
      .send(await marcaService.findMarcaByIdService(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const findAllMarcaController = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await marcaService.findAllMarcaService(
          req.query.limit,
          req.query.offset
        )
      );
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const createMarcaController = async (req, res) => {
  try {
    res.status(201).send(await marcaService.createMarcaService(req.body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const updateMarcaController = async (req, res) => {
  try {
    res
      .status(200)
      .send(await marcaService.updateMarcaService(req.params.id, req.body));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

const deleteMarcaController = async (req, res) => {
  try {
    res.status(200).send(await marcaService.deleteMarcaService(req.params.id));
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado, tente novamente!` });
  }
};

module.exports = {
  findMarcaByIdController,
  findAllMarcaController,
  createMarcaController,
  updateMarcaController,
  deleteMarcaController,
};
