const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema(
  {
    sapatos: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "sapatos",
        },
        quantidade: { type: Number, required: true },
      },
    ],
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "usuarios",
    },
  },
  {
    timestamps: true,
  }
);

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;
