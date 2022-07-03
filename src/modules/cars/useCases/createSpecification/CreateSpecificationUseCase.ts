import { ISpecificationSRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private SpecificationsRepository: ISpecificationSRepository) {}

  execute({ name, description }:IRequest) {
    const specificationAlreadyExists = this.SpecificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Already exists');
    }

    this.SpecificationsRepository.create({ name, description });
  }
}
