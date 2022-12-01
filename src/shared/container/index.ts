import "@shared/container/providers";
import { container } from 'tsyringe';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/resositories/CarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/resositories/CategoriesRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/resositories/CarsImagesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/resositories/SpecificationsRepository';

//ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

//ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

// IUsersRepository
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

// ICarsRepository
container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);

// ICarsImagesRepository
container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);


// ICarsImagesRepository
container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
);
