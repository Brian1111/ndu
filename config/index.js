if (process.env.NODE_ENV == 'production') {
    // Offer production stage environment variables
    module.exports = {
        host: process.env.host || "",
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY : process.env.AWS_SECRET_ACCESS_KEY ,
        S3_BUCKET: process.env.S3_BUCKET
        // dbURL: process.env.dbURL
    }
} else {
    // Offer dev stage settings and data
    module.exports = require('./development.json');
}
