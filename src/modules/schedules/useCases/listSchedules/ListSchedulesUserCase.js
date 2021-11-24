const AppError = require('../../../../errors/AppError');

class ListSchedulesUseCase {
  constructor(schedulesRepository) {
    this.schedulesRepository = schedulesRepository;
  }

  async execute({ provider_id }) {
    if (!provider_id) throw new AppError('Informe o id do prestador');

    return await this.schedulesRepository.findAll({ provider_id });
  }
}

module.exports = { ListSchedulesUseCase };
