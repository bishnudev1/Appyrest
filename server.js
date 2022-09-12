const app = require('./app');
const routes = require('./routes/routes');

require('dotenv').config({
    path: "./config/config.env"
});

require('./db/conn');

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server has started at ${process.env.PORT}`);
});