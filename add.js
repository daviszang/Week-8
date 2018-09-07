module.exports = function(dbase) {
    // (2) at least 3 items (containing id, name, price, type and description) are added into the product collection;
    var myobj = [
        { name: 'egg', id: '1', price: '$2', type: 'food' },
        { name: 'ball', id: '2', price: '$31', type: 'toy' },
        { name: 'coke', id: '3', price: '$3', type: 'drink' },
    ];
    // var dbase = db.db("mydb");
    dbase.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("insert " + res.insertedCount + " item successfully!");
    });
}