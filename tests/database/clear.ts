import { ref, set } from "firebase/database";
import { database } from "../../src/config/firebase";

export const clearDatabase = () =>
  describe("Clear Databse", () => {
    set(ref(database, "/"), null);
  });
