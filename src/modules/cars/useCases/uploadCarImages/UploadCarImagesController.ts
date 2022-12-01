import { container } from "tsyringe";
import { Request, Response } from "express";
import { UploadCarImagesUseCase } from "./UploadCarImageUseCase";

interface IFiles {
  filename: string;
}

class UploadCarImagesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const newCarImages = request.files as IFiles[];

    const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase);

    const imagens_name = newCarImages.map(file => file.filename);

    await uploadCarImageUseCase.execute({ car_id: id, imagens_name })

    return response.status(201).send();
  }
}

export { UploadCarImagesController }