import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "TEST-0123",
      fine_amount: 40.00,
      brand: "Car_brand",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "TEST2-0123",
      fine_amount: 40.00,
      brand: "Car_brand_teste",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_teste"
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "TEST-1123",
      fine_amount: 40.00,
      brand: "Car_brand_teste",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3"
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "TEST-1123",
      fine_amount: 40.00,
      brand: "Car_brand_teste",
      category_id: "13245"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "13245"
    });

    expect(cars).toEqual([car]);
  });
})