import { Storage } from "@google-cloud/storage";

async function main() {
  try {
    const storage = new Storage({
      keyFilename: './auth/finnet-kubernetes-cluster-dev-3291444e7b6b.json'
    })

    const bucketName = 'finnet-crm-dev'
    const localFilePath = './uploads/greetings.txt'
    const destination = 'uploads/test/greetings.txt'

    const upload = await storage.bucket(bucketName).upload(localFilePath, {
      destination, 
    })

    console.log(`uploaded: ${upload[0].metadata.mediaLink}`)
  } catch (err) {
    console.log(err.message)
  } 
}

main()
