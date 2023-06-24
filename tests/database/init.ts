import { configureFirebase } from "../../src/config/firebase";
import Dotenv from "dotenv";

export const initDatabase = () =>
  describe("Database", () => {
    Dotenv.config();
    configureFirebase();
  });
