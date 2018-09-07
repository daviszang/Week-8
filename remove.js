module.exports = function(dbase) {
    var whereStr = { "name": 'egg' }; // 查询条件
    dbase.collection("products").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
        console.log("delete one item successfully");
    });
}