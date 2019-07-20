function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query("select * from novidade order by id_novidade desc limit 7", callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
    console.log('id: ', id.id);
    this._connection.query("select * from novidade where id_novidade = " + id.id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query("insert into novidade set ?", noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query("select * from novidade order by dt_cadastro desc limit 5", callback);
}

module.exports = function(){
    return NoticiasDAO;
}
