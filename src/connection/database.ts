import { Pool } from 'pg';

const pool = new Pool({
  user: 'default',
  host: 'ep-wandering-sunset-318962-pooler.us-east-1.postgres.vercel-storage.com',
  database: 'verceldb',
  password: 'g7MAFozCHy1a',
  port: 5432, // Porta padrão do PostgreSQL
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;
