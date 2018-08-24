'use strict';
if(process.env.NODE_ENV === 'production'){    
    module.exports = {
        host: process.env.host || "",
        S3AccessKey: "AKIAITFZZKIXCRSCVONQ",
        S3Secret : "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",
        S3Bucket: "photogreedy"
    }
}else{
    //Offer dev stage settings and data
    module.exports = require('./development.json');
}