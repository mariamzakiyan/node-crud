const config = require('./config');
const app = require('./app');

const server = app.listen(config.port || 3000, null, null, () => {
    let port = server.address().port;
    console.log('Listening on port ' + port);
});

module.exports = app;