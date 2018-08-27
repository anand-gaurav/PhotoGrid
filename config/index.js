'use strict';
if(process.env.NODE_ENV === 'production'){    
    module.exports = {
        host: process.env.host || "",
        S3AccessKey: "",
        S3Secret : "",
        S3Bucket: ""
    }
}else{
    //Offer dev stage settings and data
    module.exports = require('./development.json');
}
