import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { ENV } from "./env.js"
import * as schema from "../db/schema.js"

const sql = neon(ENV.DATABASE_URL)
// here we put the schema in the database 
export const db = drizzle(sql, { schema })