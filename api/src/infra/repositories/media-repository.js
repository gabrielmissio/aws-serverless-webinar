const S3 = require('aws-sdk/clients/s3')

const s3 = new S3({ region: 'us-east-1', signatureVersion: 'v4' })

exports.generatePresignedUrl = async (objectKey, metadata) => {
  const params = {
    Bucket: process.env.MEDIA_BUCKET_NAME,
    Key: objectKey,
    Expires: 1800,
    ContentType: 'image/jpeg' // set the content type of the uploaded file
  }
  if (metadata) params.Metadata = metadata

  const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
  const fileUrl = uploadUrl.split('?')[0]

  const result = { uploadUrl, fileUrl }
  return result
}
