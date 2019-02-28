const mysql = require('mysql')

const isProduction = (type) => {

  var connexion = null, pool = null;

  if(process.env.NODE_ENV  === 'production'){
    connexion = mysql.createConnection({
            host     : "127.0.0.1",
            socketPath  : "/srv/run/mysqld/mysqld.sock",
            user     : "root",
            password : "",
            database : "AME"
    })
    pool  = mysql.createPool ({
            host: "127.0.0.1",
            socketPath  : "/srv/run/mysqld/mysqld.sock",
            user: "root",
            password: "",
            database: "AME",
            queueLimit : 0, // unlimited queueing
            connectionLimit : 100
    })
  }

  else {
    connexion = mysql.createConnection({
            host     : "127.0.0.1",
            user     : "root",
            password : "@ltgrrr",
            database : "Asin",
            charset: 'utf8'
    })
    pool  = mysql.createPool ({
            host: "127.0.0.1",
            user: "root",
            password: "@ltgrrr",
            database: "Asin",
            charset: 'utf8',
            queueLimit : 0, // unlimited queueing
            connectionLimit : 100
    });
  }

  if(type === 'connexion') return connexion
  else return pool
}


module.exports = isProduction;
