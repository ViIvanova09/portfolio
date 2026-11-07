import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("server/portfolio.db");

database.exec(`
  CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL
  )
`);

const saveProfile = database.prepare(`
    INSERT OR REPLACE INTO profile (id, name, role)
  VALUES (?, ?, ?)
  `);
saveProfile.run(1, "Viki", "Web developer");

const getProfile = database.prepare(`SELECT * FROM profile WHERE id = ?`)
const profile = getProfile.get(1)
console.log(profile);

database.close();
