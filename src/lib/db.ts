import { GeneratedAlways, Kysely } from "kysely";
import { NeonDialect } from "kysely-neon";
import { DB } from "../db/types";
import { Codegen, KyselyAuth } from "@auth/kysely-adapter";

export const db = new KyselyAuth<DB, Codegen>({
  dialect: new NeonDialect({
    connectionString: process.env.DATABASE_URL,
  }),
});
