import { createConnection } from "mysql2/promise";
import { Client } from "pg";
import { connect } from "mssql";

export const testConnect = async () => {
  try {
    console.log("postgres using pg");

    const client = new Client({
      connectionString: process.env.POSTGRES_URI ?? "",
    });
    await client.connect();

    console.log("connected");

    await client.end();

    console.log("closed");
  } catch (error) {
    console.log(error);
    console.log("postgres failed");
  }

  try {
    console.log("mysql using mysql2");
    const connection = await createConnection(process.env.MYSQL_URI ?? "");

    console.log("connected");

    await connection.end();

    console.log("closed");
  } catch (error) {
    console.log(error);
    console.log("mysql failed");
  }

  try {
    console.log("mariadb using mysql2");
    const connection = await createConnection(process.env.MARIADB_URI ?? "");

    console.log("connected");

    await connection.end();

    console.log("closed");
  } catch (error) {
    console.log(error);
    console.log("mariadb failed");
  }

  try {
    console.log("mssql using mssql");
    const connection = await connect(process.env.MSSQL_URI ?? "");

    console.log("connected");

    await connection.close();

    console.log("closed");
  } catch (error) {
    console.log(error);
    console.log("mssql failed");
  }
};
