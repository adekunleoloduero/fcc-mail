const mongoose = require('mongoose');

const databaseServer = '127.0.0.1:27017';
const databaseName = 'fcc-mail';


class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(`mongodb://${databaseServer}/${databaseName}`).
        then(() => {
            console.log('Connected to database successfully.')
        }).
        catch(err => {
            console.error('Database connection error.');
        })
    }
}



module.exports = new Database();