const AppError = require('../../../../errors/AppError');

const days = [0, 1, 2, 3, 4, 5, 6];

class CreateScheduleUseCase {
  constructor(schedulesRepository) {
    this.schedulesRepository = schedulesRepository;
  }

  async execute({ start_time, end_time, day_of_week, provider_id }) {
    if (!provider_id) throw new AppError('Informe o id do prestador!');

    if (!start_time) throw new AppError('Informe a hora de ínicio!');

    if (!end_time) throw new AppError('Informe a hora de término!');

    if (!day_of_week || !days.includes(day_of_week))
      throw new AppError(`Informe um dia de semana válido! ${days}`);

    return await this.schedulesRepository.create({
      start_time,
      end_time,
      day_of_week,
      provider_id,
    });
  }
}

module.exports = { CreateScheduleUseCase };
