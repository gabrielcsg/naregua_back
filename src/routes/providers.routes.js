const { Router } = require('express');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { ensureProvider } = require('../middlewares/ensureProvider');

const {
  CreateAddressProviderController,
} = require('../modules/accounts/useCases/createAddressProvider/CreateAddressProviderController');
const {
  CreateProviderController,
} = require('../modules/accounts/useCases/createProvider/CreateProviderController');
const {
  ListProvidersController,
} = require('../modules/accounts/useCases/listProviders/ListProvidersController');
const {
  CreateScheduleController,
} = require('../modules/schedules/useCases/createSchedule/CreateScheduleController');
const {
  ListSchedulesController,
} = require('../modules/schedules/useCases/listSchedules/ListSchedulesController');

const providersRoutes = Router();
const createProviderController = new CreateProviderController();
const createAddressProviderController = new CreateAddressProviderController();
const listProvidersController = new ListProvidersController();
const createScheduleController = new CreateScheduleController();
const listSchedulesController = new ListSchedulesController();

providersRoutes.post(
  '/',
  createProviderController.handle.bind(createProviderController),
);

providersRoutes.post(
  '/address',
  ensureAuthenticated,
  ensureProvider,
  createAddressProviderController.handle.bind(createAddressProviderController),
);

providersRoutes.get(
  '/',
  listProvidersController.handle.bind(listProvidersController),
);

providersRoutes.post(
  '/schedules',
  ensureAuthenticated,
  ensureProvider,
  createScheduleController.handle.bind(createScheduleController),
);

providersRoutes.get(
  '/:provider_id/schedules',
  ensureAuthenticated,
  listSchedulesController.handle.bind(listSchedulesController),
);

module.exports = { providersRoutes };
