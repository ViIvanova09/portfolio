import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("server/portfolio.db");

database.exec(`
  CREATE TABLE IF NOT EXISTS profile (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT
  )
`);
const columns = database.prepare("PRAGMA table_info(profile)").all();
console.log(columns);
const hasBioColumn = columns.some((column) => column.name === "bio");
if (!hasBioColumn) {
  database.exec(`
    ALTER TABLE profile
    ADD COLUMN bio TEXT
  `);
}
const saveProfile = database.prepare(`
    INSERT OR REPLACE INTO profile (id, name, role, bio)
  VALUES (?, ?, ?, ?)
  `);
saveProfile.run(
  1,
  "Viktoria Ivanova",
  "Junior Software developer",
  "I have one year of professional experience using JavaScript and TypeScript to develop and maintain online games. Currently learning React and building personal projects to strengthen my front-end skills.",
);

const getProfile = database.prepare(`SELECT * FROM profile WHERE id = ?`);
const profile = getProfile.get(1);
console.log(profile);

database.close();
