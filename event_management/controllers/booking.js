/* eslint-disable camelcase */
/* eslint-disable object-property-newline */
const eventBook = require('../models/booking');

async function eventDetails(req, res) {
  try {
    const data = await eventBook.eventDetails();
    res.status(200).send({ succes: true, data });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

async function eventBooking(req, res) {
  const {
    id, name, package_id, cutomer_id, venu_id,
    total_price, date_event, status_event,
  } = req.body;
  const event = {
    id, name, package_id, cutomer_id, venu_id,
    total_price, date_event, status_event,
  };
  try {
    await eventBook.eventBooking(event);
    res.status(200).send({ succes: true, message: ('Event is booked successful') });
  } catch (error) {
    console.log('Database error:', error);
    res.status(500).send({ succes: false, message: ('internal server error') });
  }
}

module.exports = { eventDetails, eventBooking };
