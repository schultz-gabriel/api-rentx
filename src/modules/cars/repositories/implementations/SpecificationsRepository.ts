import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationSRepository } from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationSRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specificationitem) => specificationitem.name === name,
    );
    return specification;
  }

  list(): Specification[] {
    const allSpecifications = this.specifications;
    return allSpecifications;
  }
}
