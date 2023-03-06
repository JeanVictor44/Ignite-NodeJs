import fs from 'fs'

export const deleteFile = async(filename: string) => {
  
  try {
    // Verificar se o arquivo existe

    await fs.promises.stat(filename)
  
  }catch{
    return;
  }
  // remove o arquivo
  await fs.promises.unlink(filename)
  

}