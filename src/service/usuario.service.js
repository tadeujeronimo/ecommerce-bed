const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
  return Usuario.findById(id);
};

const findAllUsersService = (limit, offset) => {
  return Usuario.find().limit(limit).skip(offset);
};

const createUserService = (body) => {
  return Usuario.create(body);
};

const updateUserService = (id, body) => {
  return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUserService = (id) => {
  return Usuario.findByIdAndDelete(id);
};

const addUserAddressService = (id, endereco) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        enderecos: endereco,
      },
    },
    {
      rawResult: true,
    }
  );
};

const removeUserAddressService = (id, addressId) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        enderecos: {
          _id: addressId,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const addUserFavShoeService = (id, sapato) => {
  console.log(sapato);
  return Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        sapatos_fav: {
          _id: sapato._id,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const removeUserFavShoeService = (id, sapato) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        sapatos_fav: {
          _id: sapato._id,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

module.exports = {
  findUserByIdService,
  findAllUsersService,
  createUserService,
  updateUserService,
  removeUserService,
  addUserAddressService,
  removeUserAddressService,
  addUserFavShoeService,
  removeUserFavShoeService,
};
