const Marca = require("../model/Marca");

const findMarcaByIdService = (id) => {
  return Marca.findById(id);
};

const findAllMarcaService = (limit, offset) => {
  return Marca.find().limit(limit).skip(offset);
};

const createMarcaService = (body) => {
  return Marca.create(body);
};

const updateMarcaService = (id, body) => {
  return Marca.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteMarcaService = (id) => {
  return Marca.findByIdAndDelete(id);
};

module.exports = {
  findMarcaByIdService,
  findAllMarcaService,
  createMarcaService,
  updateMarcaService,
  deleteMarcaService,
};
