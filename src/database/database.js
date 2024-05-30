const mongoose = require("mongoose");

/**
 * Conecta-se ao banco de dados MongoDB usando a URL especificada na variável de ambiente URLDATABASE.
 * Se a conexão for bem-sucedida, exibe uma mensagem no console indicando que a conexão foi bem-sucedida.
 * Se ocorrer um erro ao conectar ao banco de dados, exibe uma mensagem de erro no console.
 *
 * @return {Promise<void>} Uma promise que é resolvida quando a conexão é bem-sucedida ou é rejeitada com um erro se ocorrer um erro ao conectar ao banco de dados.
 */
function connectToDatabase() {
  mongoose
    .connect(
      process.env.URLDATABASE
      /*,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }*/
    )
    .then(() => {
      console.log("MongoDB conectado!");
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o MongoDB: ${err}`);
    });
}

module.exports = connectToDatabase;
