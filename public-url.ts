import { Storage } from "@google-cloud/storage";
import { add } from "date-fns";

async function main() {
  try {
    const storage = new Storage({
      keyFilename: './auth/finnet-kubernetes-cluster-dev-3291444e7b6b.json'
    })

    const fileName = 'greetings.txt'
    const objectPath = `uploads/test/${fileName}` 
    const bucketName = 'finnet-crm-dev'

    const response = storage.bucket(bucketName).file(objectPath).publicUrl()

    console.log(`public url`, response)
  } catch (err) {
    console.log(err.message)
  } 
}

main()
