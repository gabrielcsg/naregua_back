const { Schedule } = require('../models/Schedule');

class SchedulesRepository {
  async create(createScheduleDto) {
    return await Schedule.create(createScheduleDto);
  }

  async findAll({ provider_id }) {
    return await Schedule.findAll({ where: { provider_id } });
  }
}

module.exports = { SchedulesRepository };
