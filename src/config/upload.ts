import multer from "multer";
import { resolve } from 'path'
import crypto from 'node:crypto'

export function upload(folder: string){
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname,'..','..', folder),
      filename:(request, file, callback) => {
        const fileHash = crypto.randomBytes(16).toString("hex")
        const filename = `${fileHash}-${file.originalname}`
      }      
    })
  }
}