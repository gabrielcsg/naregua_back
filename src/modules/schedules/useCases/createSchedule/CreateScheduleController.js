const {
  SchedulesRepository,
} = require('../../repositories/SchedulesRepository');
const { CreateScheduleUseCase } = require('./CreateScheduleUseCase');

class CreateScheduleController {
  constructor() {
    const schedulesRepository = new SchedulesRepository();
    this.createScheduleUseCase = new CreateScheduleUseCase(schedulesRepository);
  }
  async handle(request, response) {
    const { provider_id } = request.user;
    const { start_time, end_time, day_of_week } = request.body;

    const schedule = await this.createScheduleUseCase.execute({
      start_time,
      end_time,
      day_of_week,
      provider_id,
    });

    return response.status(201).json(schedule);
  }
}

module.exports = { CreateScheduleController };
