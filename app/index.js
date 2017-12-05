const express = require('express');
const app = express();
const router = express.Router(); // is there any way to group ( eg. prefix -> users ) routes without using express.Router() ?
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req,res,next) => {
    console.log("Request url => " + req.protocol + '://' + req.get('host') + req.originalUrl);
    console.log("Request method => " + req.method);
    next();
});

router.get('/', require('./routes/user/getAll'));
router.post('/create', require('./routes/user/create'));
// router.get('/:id', require('./routes/user/getSingle'));
// router.put('/:id', require('./routes/user/update'));
// router.delete('/:id', require('./routes/user/delete'));

router.route('/:id')
    .get(require('./routes/user/getSingle'))
    .put(require('./routes/user/update'))
    .delete(require('./routes/user/delete'));

app.use('/users', router);

module.exports = app;