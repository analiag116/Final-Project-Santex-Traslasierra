const authAdmin = require('./authAdmin.controller');
const { loginAdmin, newAdmin } = require("./admin.controller");
const { loginEncuestador, newEncuestador } = require('./encuestador.controller');
const { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta } = require('./preguntas.controller');
const { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard } = require('./infoCard.controller');
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require('./encuesta.controller');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('./respuesta.controller');
const { createUser, getIdUser, findUsers, putUser, deleteUser } = require('./user.controller');


module.exports = {
  authAdminController: { authAdmin },
  adminController: { loginAdmin, newAdmin },
  encuestadorController: { loginEncuestador, newEncuestador },
  preguntaController: { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta },
  infoCardController: { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard },
  encuestaController: { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta },
  respuestaController: { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta },
  userController: { createUser, getIdUser, findUsers, putUser, deleteUser },
};
