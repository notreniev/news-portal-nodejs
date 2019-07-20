var mysql = require('mysql');

var connMySQL = function(){
    console.log('conexao com banco de dados foi estabelecida');
    return mysql.createConnection({
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'asprocergs1'
    });
}

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o banco de dados');
    return connMySQL;
}