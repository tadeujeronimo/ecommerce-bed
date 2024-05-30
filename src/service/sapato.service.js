const Sapato = require("../model/Sapato");

const findShoeByIdService = (id) => {
  return Sapato.findById(id);
};

const findAllShoesService = (limit, offset) => {
  return Sapato.find().limit(limit).skip(offset);
};

const createShoeService = (body) => {
  return Sapato.create(body);
};

const updateShoeService = (id, body) => {
  return Sapato.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteShoeService = (id) => {
  return Sapato.findByIdAndDelete(id);
};

const addCategoriaSapatoService = (id, categoria) => {
  return Sapato.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        categorias: {
          _id: categoria._id,
          createdAt: categoria.createdAt,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const removeCategoriaSapatoService = (id, categoria) => {
  return Sapato.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        categorias: {
          _id: categoria._id,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const addMarcaSapatoService = (id, marca) => {
  return Sapato.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        marca: {
          _id: marca._id,
          createdAt: marca.createdAt,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const removeMarcaSapatoService = (id, marca) => {
  return Sapato.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        marca: {
          _id: marca._id,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

module.exports = {
  findShoeByIdService,
  findAllShoesService,
  createShoeService,
  updateShoeService,
  deleteShoeService,
  addCategoriaSapatoService,
  removeCategoriaSapatoService,
  addMarcaSapatoService,
  removeMarcaSapatoService,
};
