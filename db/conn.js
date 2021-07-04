const mongoose = require('mongoose');
// here databse is the string of your mongodb atlase configuration provided by itself
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection ${err}`));
