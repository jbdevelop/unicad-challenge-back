const { Router } = require('express')
const routes = new Router()

const DeliveryController = require('./src/controllers/DeliveryController')

routes.post('/create', DeliveryController.store);
routes.get('/list', DeliveryController.show);

module.exports = routes