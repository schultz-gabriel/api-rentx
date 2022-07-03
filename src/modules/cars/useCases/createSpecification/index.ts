import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

// eslint-disable-next-line max-len
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
