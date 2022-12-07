import "@shared/container/providers";
import { container } from 'tsyringe';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/resositories/CarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalRepository';
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { CategoriesRepository } from '@modules/cars/infra/typeorm/resositories/CategoriesRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/resositories/CarsImagesRepository';
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/resositories/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
