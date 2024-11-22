import { Storage } from "@google-cloud/storage";

async function main() {
  try {
    const storage = new Storage({
      keyFilename: './auth/finnet-kubernetes-cluster-dev-3291444e7b6b.json'
    })

    const fileName = 'greetings.txt'
    const bucketName = 'finnet-crm-dev'

    const response = await storage.bucket(bucketName).file(fileName).download({
      destination: `${__dirname}/downloads/${fileName}`
    })

    console.log(response)
  } catch (err) {
    console.log(err.message)
  } 
}

main()
