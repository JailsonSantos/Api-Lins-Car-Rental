import { ICarsRepository } from "../ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCartDTO";

class CarsRepositoryInMemory implements ICarsRepository {

  cars: Car[] = [];

  async create(
    {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
      specifications,
      id
    }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
      specifications,
      id
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
    const allCarsAvailable = this.cars.filter(
      (car) => {
        if (
          car.available === true
          || (name && car.name === name)
          || ((brand && car.brand === brand)
            || (category_id && car.category_id === category_id))
        ) {
          return car;
        }
        return null;
      });
    return allCarsAvailable;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.cars.findIndex((car) => car.id === id);
    this.cars[findIndex].available = available;
  }


}

export { CarsRepositoryInMemory }