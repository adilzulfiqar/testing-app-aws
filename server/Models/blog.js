var mongoos = require('mongoose');
var Schema = mongoos.Schema;


// Get current data
var currentDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = mm + '/' + dd + '/' + yyyy;

    return today;
}


// Create Schema
var userSchema = new Schema({
    image: {
        type: String,
        default: 'http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg'
    },
    heading: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: currentDate
    },
    description: {
        type: String,
        require: true
    }
});

module.exports = Blog = mongoos.model('blog', userSchema);