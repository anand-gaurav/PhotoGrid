'use strict';

module.exports = (express, app) => {
    var router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index', {});
    });

    app.use('/', router);
}