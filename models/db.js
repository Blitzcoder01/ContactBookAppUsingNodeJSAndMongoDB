const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Usercontactsdb:UserContactdb@123@cluster0.9cejv.mongodb.net/UserContactdb', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./usermodel.js');