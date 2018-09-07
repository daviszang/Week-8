module.exports = function(dbase) {
    dbase.collection("products").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
}