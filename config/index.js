'use strict';
if(process.env.NODE_ENV === 'production'){    
    module.exports = {
        host: process.env.host || ""
    }
}else{
    //Offer dev stage settings and data
    module.exports = require('./development.json');
}