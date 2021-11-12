require("dotenv").config();


module.exports = {
  reactStrictMode: true,
  env: {
    // DB_URI: process.env.DB_URI,
    // REACT_APP_GRAPHQL_URL: process.env.REACT_APP_GRAPHQL_URL,
    // REACT_APP_LOCAL_GRAPHQL_URL: process.env.REACT_APP_LOCAL_GRAPHQL_URL,
    // SECRET: process.env.SECRET,
    // S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
    // S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
    // S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
    // S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
    // ADMIN: process.env.ADMIN
  },
  images: {
    domains: [process.env.IMG_DOMAIN],
  },
};
