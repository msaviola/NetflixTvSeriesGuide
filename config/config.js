module.exports = {
  "development": {
    "username": process.env.DB_USERNAME ||"root",
    "password": process.env.DB_PASSWORD ||"root",
    "database": process.env.DB_DATABASE ||"netflix",
    "host": process.env.DB_HOST ||"127.0.0.1",
    "port": process.env.DB_PORT || 3306,
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