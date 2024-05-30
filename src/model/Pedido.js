const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema(
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
    concluido: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;
