
let Event = require('./event.modal');

module.exports = {

    addEvent : function (req, res, next) {
        console.log("req.body ", req.body);
        let data = req.body;
        let eventData  = {
            title: data.title,
            start : data.start,
            end : data.end
        };
        let post = new Event(eventData);
        return post
            .save()
            .then(postRes => {
                if (!postRes) {
                    return res.status(401).end();
                }
                res.json(postRes);
            })
            .catch(err => next(err));
    },

    getEvent : function (req, res, next) {


        return Event.find({})
            .then(events => {
                if (!events) {
                    return res.status(401).end();
                }
                res.json(events);
            })
            .catch(err => next(err));
    }
};
