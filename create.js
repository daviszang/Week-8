module.exports = function(dbase) {
    // (1)	 a collection called products is added to the mongo database mydb;
    console.log("create collection successfully");
    /* The following code is not necessary because in MongoDB, a collection is not created until it gets content! */
    // dbase.createCollection('products', function(err, res) {
    //     if (err) throw err;
    //     console.log("create collection successfully");
    // });
}