//const sequelize = require('sequelize')

const db = require("../models")
const Delivery = db.Delivery

//import Delivery from "../models/delivery"

class DeliveryController {
  async store(request, response) {
    const { client, deliveryDate, startPoint, endPoint } = request.body

    const data = await Delivery.create({
      client,
      deliveryDate,
      startPoint,
      endPoint,
    })

    return response.status(200).json(data)
  }

  async show(request, response) {
    const { client, deliveryDate, startPoint, endPoint } = request.query

    const data = await Delivery.findAll({})

    return response.status(200).json(data)
  }
}

module.exports = new DeliveryController()
