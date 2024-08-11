"use server";

import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export const loginService = async (email: string, password: string) => {
  const { rows } =
    await sql`SELECT username, email, password FROM users WHERE email = ${email} AND authorized = true`;

  if (!rows.length || !bcrypt.compareSync(password, rows[0].password)) {
    return null;
  }

  return {
    username: rows[0].username,
    email: rows[0].email,
  };
};
