const db = require('../common/connect');
const CTXK = function (ctxk) {
    this.id_xk = ctxk.id_xk;
    this.id_nl = ctxk.id_nl;
    this.soluong = ctxk.soluong;
}


CTXK.get_all = function(result){
    db.query("SELECT * FROM CTXK", function(err, cthd){
        if(err){
            result(err);
        } else {
            result(cthd)
        }
    })
}


CTXK.getById = function(id, result) {
    console.log(id)
    db.query(`SELECT * FROM CTHD where id_hoadon = ${id}`, function(err, user){
        if(err || user.length == 0){
            result(null);
        } else {
            result(user[0]);
        }
    })
}


CTXK.create = function(data, result) {
    db.query("insert into MonAn set ?", data, function(err, user){
        if(err){
            result(null);
        } else {
            result({id: user.insertId, ...data});
        }
    })
}


CTXK.remove = function(id, result) {

    db.query("delete from MonAn where id = ?", id, function(err, user){
        if(err){
            result(null);
        } else {
            result("Xoa thanh cong id " + id)
        }
    })

}


CTXK.update = function(data, result) {

    db.query("update users set name=?, email=?, password=?  where id=?", [data.name, data.email, data.password], function(err, user){
        if(err){
            result(null);
        } else {
            result(data)
        }
    })
}


CTXK.check_login = function(data, result) {
    db.query(`SELECT * FROM users where email=? and password=?`,[data.email, data.password], function(err, user){
        if(err || user.length == 0){
            result(null);
        } else {
            result(user[0]);
        }
    })
}

module.exports = CTXK;