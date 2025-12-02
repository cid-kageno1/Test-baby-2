import fs from "fs";
import path from "path";

const dataPath = path.join("db", "data.json");

export function readData() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

export function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}
