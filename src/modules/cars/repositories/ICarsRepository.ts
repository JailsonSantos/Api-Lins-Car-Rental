import { Car } from "../infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../dtos/ICreateCartDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository }