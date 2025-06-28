import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, '../database.db'), { verbose: console.log });

// Initialisation des tables
db.exec(`
    CREATE TABLE IF NOT EXISTS currencies (
        code TEXT PRIMARY KEY,
        symbol TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS things (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        icon TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS prices (
        thing_id INTEGER NOT NULL,
        value DECIMAL(20,2) NOT NULL,
        currency_code TEXT NOT NULL,
        FOREIGN KEY (thing_id) REFERENCES things(id),
        FOREIGN KEY (currency_code) REFERENCES currencies(code)
    );

    CREATE TABLE IF NOT EXISTS sources (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        thing_id INTEGER NOT NULL,
        name TEXT,
        text TEXT,
        link TEXT NOT NULL,
        date DATE,
        FOREIGN KEY (thing_id) REFERENCES things(id)
    );
`);

export default db;