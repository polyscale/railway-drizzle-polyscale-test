import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, serial, text, char, date } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { Pool } from "pg";

export const users = pgTable("employees", {
  emp_no: serial("emp_no").primaryKey(),
  first_name: text("first_name").notNull(),
  last_name: text("first_name").notNull(),
  gender: char("gender").notNull(),
  birth_date: date("birth_date").notNull(),
  hire_date: date("hire_date").defaultNow().notNull(),
});

type User = InferModel<typeof users>;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI ?? "",
});

const db = drizzle(pool);

export const testDrizzleOrm = async () => {
  try {
    console.log("drizzle-orm using pg:");
    console.log(await db.select().from(users));
  } catch (error) {
    console.log(error);
    console.log("drizzle-orm using pg failed");
  }
};
