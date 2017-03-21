var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mean');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Running');
});

var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

//Models
var BookModel = mongoose.model('Book', Book);

var newBook = new BookModel({ title: 'ddd', author: 'Ma xu xing', releaseDate: new Date() });
newBook.save(function(err) {
	if (err) {
		console.log('Insert error');
	}
	mongoose.connection.close();
});

    //   some = mongoose.model('User',UserSchema);
// db.collection('what').insert({firstName: 'what', lastName: 'what', email:'what', username: 'what', passwd: 'what'});
// mongoose.connection.close();
// process.exit();
