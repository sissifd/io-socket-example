/**
 * Bibs needed
 */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

/**
 * Models
 */
// require('./models/XXXX');

/**
 * Routes
 */
const index = require('./routes/index');

/**
 * Passport
 */
// require('./config/passport')(passport);

/**
 * Keys
 */
// const keys = require('./config/keys');

/**
 * Handlebars helpers
 */
// const {
//     truncate,
//     stripTags,
//     formatDate,
//     select
// } = require('./helpers/hbs');

/**
 * Mongoose connection
 */
// // Map gloabl promises
// mongoose.Promise = global.Promise;
// // Mongoose connect
// mongoose.connect(keys.mongoURI, {
//     useMongoClient: true
// }).then(() => {
//     console.log('MongoDB connected');
// }).catch((err) => {
//     console.log(err);
// });

/**
 * Middleware
 */

// Initialize express application
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Handlebars middleware
app.engine('handlebars', exphbs({
    // helpers: {
    //     truncate: truncate,
    //     stripTags: stripTags,
    //     formatDate: formatDate,
    //     select: select
    // },
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

/**
 * User routes
 */
app.use('/', index);

/**
 * IO
 */
io.on('connection', (socket) => {
    console.log('connected');
    // On disconnection
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
    // On chat message
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

/**
 * Server start
 */
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});