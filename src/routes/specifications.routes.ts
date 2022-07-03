import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

export const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) => createSpecificationController.handle(req, res));

// specificationRoutes.get('/', (req, res) => {
//   const allSpecifications = SpecificationsRepository.list();
//   return res.json(allSpecifications).send();
// });
