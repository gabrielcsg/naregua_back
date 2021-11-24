const {
  SchedulesRepository,
} = require('../../repositories/SchedulesRepository');
const { ListSchedulesUseCase } = require('./ListSchedulesUserCase');

class ListSchedulesController {
  constructor() {
    const schedulesRepository = new SchedulesRepository();
    this.listSchedulesUseCase = new ListSchedulesUseCase(schedulesRepository);
  }

  async handle(request, response) {
    const { provider_id } = request.params;

    const schedules = await this.listSchedulesUseCase.execute({ provider_id });

    return response.json(schedules);
  }
}

module.exports = { ListSchedulesController };
