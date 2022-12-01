import { inject, injectable } from "tsyringe";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

interface IRequest {
  car_id: string;
  imagens_name: string[];
}

@injectable()
class UploadCarImagesUseCase {

  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository
  ) { }

  async execute({ car_id, imagens_name }: IRequest): Promise<void> {
    imagens_name.map(async (imagem) => {
      await this.carsImagesRepository.create(car_id, imagem)
    })
  }
}

export { UploadCarImagesUseCase }