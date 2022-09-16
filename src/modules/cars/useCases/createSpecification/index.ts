// eslint-disable-next-line max-len
// import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationsRepository = null;

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

// eslint-disable-next-line max-len
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
