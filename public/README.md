# Static Website

This directory contains the code and resources for our static website. The website is a simple HTML, CSS, and pure JS page.

## Local Development

To run the website locally, simply navigate to the `public` directory and open `index.html` in your browser.

## Deployment
We host the static website on an S3 bucket and use the AWS CLI to deploy it. Here are the steps to deploy the website:

 1. Make sure you have the AWS CLI installed and configured with your credentials.
 2. Run the following command in your terminal to sync the contents of the public directory with your S3 bucket:


Replace your_s3_media_bucket_name with the name of your S3 bucket.

```bash
WEB_SITE_BUCKET=your_s3_media_bucket_name aws s3 sync . s3://$WEB_SITE_BUCKET --exclude '*' --include 'media/*' --include 'src/*' --include 'styles/*' --include 'index.html'
```
Replace your_s3_media_bucket_name with the name of your S3 bucket.

or use the above command from "deploy" package.json script

```bash
WEB_SITE_BUCKET=your_s3_media_bucket_name  npm run deploy
```
Replace your_s3_media_bucket_name with the name of your S3 bucket.

That's it! Your static website should now be live on the internet. You can access it using the URL of your S3 bucket.
