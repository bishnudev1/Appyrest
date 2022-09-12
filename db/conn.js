const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((data) => {
    console.log(`Database is connected to ${data.connection.host}`);
}).catch((err) => {
    console.log(`Error occured : ${err}`);
});