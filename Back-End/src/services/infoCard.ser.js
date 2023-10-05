const { infoCardProvider } = require('../providers');

const validateInfoCard = async (id) => {
  return await infoCardProvider.validateInfoCard(id);
};

const createInfoCard = async (infoCard) => {
  return await infoCardProvider.createInfoCard(infoCard);
};

const getIdInfoCard = async (id) => {
  return await infoCardProvider.getIdInfoCard(id);
};

const findInfoCards = async (options) => {
  return await infoCardProvider.findInfoCards(options);
};

const putInfoCard = async (id, infoCard) => {
  return await infoCardProvider.putInfoCard(id, infoCard);
};

const deleteInfoCard = async (id) => {
  return await infoCardProvider.deleteInfoCard(id);
};

module.exports = { 
  validateInfoCard,
  createInfoCard,
  getIdInfoCard,
  findInfoCards,
  putInfoCard,
  deleteInfoCard,
};
