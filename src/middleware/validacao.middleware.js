const ObjectId = require("mongoose").Types.ObjectId;

/**
 * Valida a entrada do usuário no corpo da requisição e realiza as ações necessárias com base no resultado da validação.
 *
 * @param {Object} req - O objeto de requisição contendo a entrada do usuário.
 * @param {Object} res - O objeto de resposta usado para enviar o resultado da validação.
 * @param {Function} next - A próxima função middleware a ser chamada.
 * @return {Object} O objeto de resposta com o resultado da validação ou a próxima função middleware.
 */
const validaUsuario = (req, res, next) => {
  //testa um erro por vez e toma apenas uma decisao por vez
  if (!req.body.nome) {
    return res
      .status(400)
      .send({ message: `O campo 'nome' precisa ser preenchido!` });
  }
  if (req.body.nome) {
    console.log(typeof req.body.nome);
  }
  if (!req.body.email) {
    return res
      .status(400)
      .send({ message: `O campo 'email' precisa ser preenchido!` });
  }
  if (!req.body.senha) {
    return res
      .status(400)
      .send({ message: `O campo 'senha' precisa ser preenchido!` });
  }
  if (!req.body.imagem) {
    return res
      .status(400)
      .send({ message: `O campo 'imagem' precisa ser preenchido!` });
  }
  if (req.body.admin == undefined) {
    return res
      .status(400)
      .send({ message: `O campo 'admin' precisa ser preenchido!` });
  }

  return next();
};

/**
 * Valida os campos de endereço no corpo da requisição.
 *
 * @param {Object} req - O objeto de requisição.
 * @param {Object} res - O objeto de resposta.
 * @param {Function} next - A função do próximo middleware.
 * @return {Object} O objeto de resposta com o resultado da validação ou a próxima função do middleware.
 */
const validaEndereco = (req, res, next) => {
  let erros = [];

  req.body.map((value, key) => {
    if (!value.rua) {
      erros.push(`'${key + 1} - rua'`);
    }
    if (!value.numero) {
      erros.push(`'${key + 1} - numero'`);
    }
    if (!value.cep) {
      erros.push(`'${key + 1} - cep'`);
    }
  });

  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

/**
 * Valida o corpo da requisição para um sapato e verifica se todos os campos obrigatórios estão presentes.
 *
 * @param {Object} req - O objeto de requisição.
 * @param {Object} res - O objeto de resposta.
 * @param {Function} next - A próxima função de middleware.
 * @return {Promise} Retorna uma Promise que resolve para a próxima função de middleware se todos os campos estiverem presentes,
 *                     ou envia um código de status 400 com uma mensagem de erro se algum campo estiver faltando.
 */
const validaSapato = (req, res, next) => {
  let erros = []; //var para acumular os erros

  if (!req.body.nome) {
    erros.push("nome");
  }
  if (!req.body.descricao) {
    erros.push("descricao");
  }
  if (!req.body.precoUnitario) {
    erros.push("precoUnitario");
  }
  if (!req.body.imagem) {
    erros.push("imagem");
  }
  if (!req.body.codigoBarra) {
    erros.push("codigoBarra");
  }
  if (!req.body.marca) {
    erros.push("marca");
  }
  if (!req.body.genero) {
    erros.push("genero");
  }
  if (!req.body.tamanho) {
    erros.push("tamanho");
  }
  if (!req.body.cor) {
    erros.push("cor");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

/**
 * Valida a categoria no corpo da requisição. Se o campo 'nome' estiver faltando,
 * envia uma resposta com código 400 e uma mensagem indicando que o campo é obrigatório.
 * Caso contrário, chama a próxima função middleware.
 *
 * @param {Object} req - O objeto de requisição contendo os dados da categoria.
 * @param {Object} res - O objeto de resposta usado para enviar o resultado da validação.
 * @param {Function} next - A próxima função middleware a ser chamada.
 * @return {Object} O objeto de resposta com o resultado da validação ou a próxima função middleware.
 */
const validaCategoria = (req, res, next) => {
  if (!req.body.nome) {
    return res
      .status(400)
      .send({ message: `O campo 'nome' precisa ser preenchido!` });
  }

  return next();
};

/**
 * Valida a marca no corpo da requisição. Se o campo 'nome' estiver faltando,
 * envia uma resposta com código 400 e uma mensagem indicando que o campo é obrigatório.
 * Caso contrário, chama a próxima função middleware.
 *
 * @param {Object} req - O objeto de requisição contendo os dados da marca.
 * @param {Object} res - O objeto de resposta usado para enviar o resultado da validação.
 * @param {Function} next - A próxima função middleware a ser chamada.
 * @return {Object} O objeto de resposta com o resultado da validação ou a próxima função middleware.
 */
const validaMarca = (req, res, next) => {
  if (!req.body.nome) {
    return res
      .status(400)
      .send({ message: `O campo 'nome' precisa ser preenchido!` });
  }

  return next();
};

const validaPedido = (req, res, next) => {
  let erros = []; //var para acumular os erros

  if (!req.body.precoTotal) {
    erros.push("precoTotal");
  }

  if (!req.body.frete) {
    erros.push("frete");
  }

  if (req.body.concluido == undefined) {
    erros.push("concluido");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

const validaCarrinho = (req, res, next) => {
  let erros = []; //var para acumular os erros

  if (!req.body.precoTotal) {
    erros.push("precoTotal");
  }

  if (!req.body.frete) {
    erros.push("frete");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

const validaIdParams = (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    return next();
  } else {
    return res
      .status(400)
      .send({ message: `O ID não corresponde aos padroes necessarios` });
  }
};

const valida_IdBody = (req, res, next) => {
  if (ObjectId.isValid(req.body._id)) {
    return next();
  } else {
    return res
      .status(400)
      .send({ message: `O ID não corresponde aos padroes necessarios` });
  }
};

const validaLogin = (req, res, next) => {
  let erros = [];

  if (!req.body.email) {
    erros.push("email");
  }

  if (!req.body.senha) {
    erros.push("senha");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

const validaSapatosCarrinhoPedido = (req, res, next) => {
  let erros = [];

  req.body.sapatos.map((value, key) => {
    if (!value._id) {
      erros.push(`'${key + 1} - _id'`);
    }
    if (!ObjectId.isValid(value._id)) {
      erros.push(`'${key + 1} - _id - tipo invalido'`);
    }
    if (!value.quantidade) {
      erros.push(`'${key + 1} - quantidade'`);
    }
  });

  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length > 1) {
      return res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    } else {
      return res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    }
  }
};

module.exports = {
  validaUsuario,
  validaEndereco,
  validaSapato,
  validaCategoria,
  validaMarca,
  validaPedido,
  validaCarrinho,
  validaIdParams,
  valida_IdBody,
  validaLogin,
  validaSapatosCarrinhoPedido,
};
