module.exports = function(dbase) {
    var whereStr = { "name": 'ball' }; // 查询条件
    var updateStr = { $set: { "price": "$10000" } };
    dbase.collection("products").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("update successfully");
    });
}