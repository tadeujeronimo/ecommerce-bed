const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota de auth
const sapato = require("./src/router/sapato.router"); //arquivo de rota de sapato
const categoria = require("./src/router/categoria.router"); //arquivo de rota de categoria
const marca = require("./src/router/marca.router"); //arquivo de rota de marca
const carrinho = require("./src/router/carrinho.router"); //arquivo de rota de carrinho
const pedido = require("./src/router/pedido.router"); //arquivo de rota de pedido

const app = express();

const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["localhost:3001"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); //chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas de auth
app.use("/sapato", sapato); //chamando as rotas de sapato
app.use("/categoria", categoria); //chamando as rotas de categoria
app.use("/marca", marca); //chamando as rotas de marca
app.use("/carrinho", carrinho); //chamando as rotas de carrinho
app.use("/pedido", pedido); //chamando as rotas de pedido

app.get("/", (req, res) => {
  res.send({
    message: "Bem-vindo ao nosso e-commerce!",
  });
});

app.listen(port, () => {
  console.log(`Servidor executando em: http://localhost:${port}`);
});
