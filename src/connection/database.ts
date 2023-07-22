import { Pool } from 'pg';
require('dotenv').config();

const pool = new Pool({
  user: process.env.User,
  host: process.env.Host,
  database: process.env.DataBase,
  password: process.env.Password,
  port: 5432, // Porta padrão do PostgreSQL
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;
