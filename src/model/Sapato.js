const mongoose = require("mongoose");

const SapatoSchema = new mongoose.Schema(
  {
    nome: { type: String, unique: true, required: true },
    descricao: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    imagem: { type: String, required: true },
    codigoBarra: { type: Number, unique: true, required: true },
    categorias: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "categorias",
        },
        createAt: { type: Date, required: true, default: Date.now() },
      },
    ],
    marca: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "marcas",
      },
      createAt: { type: Date, required: true, default: Date.now() },
    },
    genero: {
      type: String,
      required: true,
      enum: ["M", "F", "U"],
    },
    tamanho: { type: Number, required: true, min: 33, max: 45 },
    cor: { type: String, required: true, enum: ["Branco", "Preto", "Vermelho", "Verde", "Azul", "Amarelo", "Rosa"] },
  },
  {
    timestamps: true,
  }
);

const Sapato = mongoose.model("sapatos", SapatoSchema);

module.exports = Sapato;
