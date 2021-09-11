const mySql= require('mysql2');

mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Aashiana@sh12',
    database: 'nodejs-training'
});

module.exports= class Vendors {
    constructor(name){
        this.name=name
    }

    deleteVendorById(id){
        
    }
}