import { Storage } from "@google-cloud/storage";

async function main() {
  const storage = new Storage({
    keyFilename: './auth/finnet-kubernetes-cluster-dev-3291444e7b6b.json'
  })

  const fileName = 'greetings.txt'
  const bucket = storage.bucket('finnet-crm-dev')  

  const response = await bucket.file(fileName).download({
    destination: `${__dirname}/downloads/${fileName}`
  })

  console.log(response)
}

try {
  main()
} catch (err) {
  console.log(err)
}