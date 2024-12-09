import 'dotenv/config'
import { Storage } from "@google-cloud/storage";

async function main() {
  try {
    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: {
        client_email: process.env.GCS_CLIENT_EMAIL,
        private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }
    })

    const bucketName = 'finnet-crm-dev'
    const fileName = 'greetings-with-no-key-json.txt'
    const localFilePath = `./uploads/${fileName}`
    const destination = `uploads/test/${fileName}`

    const upload = await storage.bucket(bucketName).upload(localFilePath, {
      destination, 
    })

    console.log(`uploaded: ${upload[0].metadata.mediaLink}`)
  } catch (err) {
    console.log(err.message)
  } 
}

main()
