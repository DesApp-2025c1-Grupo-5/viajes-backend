const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // PASAR A VARIABLE DE ENTORNO !!!
  host: 'localhost',
  database: 'appViajes',
  password: 'postgres', // PASAR A VARIABLE DE ENTORNO !!!
  port: 5432,
});

module.exports = pool;
