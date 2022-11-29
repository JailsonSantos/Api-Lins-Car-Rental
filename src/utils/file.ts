import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    // Verifica se existe o arquivo
    await fs.promises.stat(filename);

  } catch (error) {
    return
  }

  // Remove o arquivo existente
  await fs.promises.unlink(filename);
}