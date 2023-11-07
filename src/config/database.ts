import { Pool } from "pg";

export let pool: Pool;

export const configureDatabase = async () => {
  pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD_DEV,
    port: parseInt(process.env.DB_PORT),
  });

  if (process.env.ENVIROMENT === "dev") {
    await pool.query(`
      DO $$ DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
            EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || '';
        END LOOP;
      END $$;
    `);
  }
};
