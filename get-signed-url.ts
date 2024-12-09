import 'dotenv/config'
import { Storage } from "@google-cloud/storage";
import { add } from "date-fns";

async function main() {
  try {
    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: {
        client_email: process.env.GCS_CLIENT_EMAIL,
        private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n'), 
      }
    })

    const fileName = 'greetings-with-no-key-json.txt'
    const objectPath = `uploads/test/${fileName}` 
    const bucketName = 'finnet-crm-dev'

    const response = await storage.bucket(bucketName).file(objectPath).getSignedUrl({
      action: 'read',
      expires: add(new Date(), {
        weeks: 1
      })
    })

    console.log(`get signed url`, response[0])
  } catch (err) {
    console.log(err.message)
  } 
}

main()
