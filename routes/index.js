'use strict';

module.exports = (express, app, formidable, fs, os) => {
    var router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index', {host: app.get('host')});
    });

    router.post('/upload', (req, res, next) => {

        function generateFileName(filename){
            var ext_regex = /(?:\.([^.]+))?$/;
        }
        var tmpFile, nFile, fname;
        var newForm = new formidable.IncomingForm();
            newForm.keepExtensions = true;
            // it will look for payload in req object and will provide with err, fields and files received
            newForm.parse(req, (err, fields, files) => {
                tmpFile = files.upload.path;
                // random filename to be uploaded to S3 bucket
                fname = 
            })
    })

    app.use('/', router);
}