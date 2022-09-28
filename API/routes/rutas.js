const router = require('express').Router();
const equipoController = require('../controllers/equipoController');




router.get('/equipo/:id',equipoController.getEquipo);
router.get('/equipo',equipoController.getEquipos);
router.post('/equipo',equipoController.addEquipo);
router.delete('/equipo/:id',equipoController.deleteEquipo);
router.put('/equipo/:id',equipoController.editEquipo);
module.exports = router;