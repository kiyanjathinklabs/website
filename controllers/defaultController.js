module.exports = {
    index:  (req, res) => {
        console.log("you've been routed to the index page.");
        //res.send('Welcome to the Nodejs Cms Tutorial');
        res.render('default/index'), {layout: 'app.js'};
    },

    admin: (req, res) => {
        console.log("you've been routed to the admin page.");
        //res.send("you've routed to the admin page");
        res.render('default/admin'), {layout: 'app.js'};
    },

    login: (req, res) => {
        console.log("you've been routed to the login page.");
        //res.send("you've routed to the login page");
        res.render('default/login'), {layout: 'app.js'};
    },



};
