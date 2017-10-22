

'use strict';

module.exports = function(app) {
    // Insert routes below
    app.use('/api/event', require('./api/event'));
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get((req, res) => {
            res.status(404);
        });

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.send({status: true, message:"success!"});
        });
};
