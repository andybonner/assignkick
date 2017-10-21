/**
 * Created by zainmustafa on 20/10/2017.
 */
'use strict';

let Router = require('express');
let controller = require('./event.controller');

let router = new Router();

router.get('/', controller.getEvent);
router.post('/add', controller.addEvent);


module.exports = router;
