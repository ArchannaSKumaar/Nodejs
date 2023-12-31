const eventModel = require('../models/decor');

async function allDecor(req, res) {
  try {
    const data = await eventModel.allDecor();
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = {
  allDecor,
};
