'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('deliveries', [{
      client: 'Hotel Copacabana Palace',
      deliveryDate: '2020-07-17',
      startPoint: 'Belmond Copacabana Palace, Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001',
      endPoint: 'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      client: 'IPAE',
      deliveryDate: '2020-02-11',
      startPoint: 'IPAE - Instituto Petropolitano Adventista de Ensino, BR-040, 68 - Araras, Petrópolis - RJ, 25725-650',
      endPoint: 'Av. Alm. Barroso, 54 - Centro, Rio de Janeiro - RJ, 20031-000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      client: 'Via Parque',
      deliveryDate: '2019-12-03',
      startPoint: 'Via Parque Shopping, Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-904',
      endPoint: 'Shopping Leblon, Av. Afrânio de Melo Franco, 290 - Leblon, Rio de Janeiro - RJ, 22430-060',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});    
  },

  down: async (queryInterface, Sequelize) => {    
    return await queryInterface.bulkDelete('deliveries', null, {});     
  }
};
