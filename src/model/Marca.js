const mongoose = require("mongoose");

const MarcaSchema = new mongoose.Schema(
  {
    nome: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Marca = mongoose.model("marcas", MarcaSchema);

module.exports = Marca;
