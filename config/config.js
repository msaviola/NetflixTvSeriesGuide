module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "netflix",
    "host": "127.0.0.1",
    "port": process.env.DB_PORT || 8889,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }

  
}