import { config } from "dotenv";
import { testConnect } from "./test-connect";
import { testDrizzleOrm } from "./test-drizzle-orm";

(async () => {
  config();
  await testConnect();

  await testDrizzleOrm();
})();
