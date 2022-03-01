module.exports = {
    index:  (req, res) => {
        console.log('Routing started.');
        //res.send('Welcome to the Nodejs Cms Tutorial');
        res.render('default/index'), {layout: 'app.js'};
    },
};