"use server";

import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export const loginService = async (email: string, password: string) => {
  const result: LoginResultType = {
    data: null,
    error: "",
  };
  try {
    const { rows } =
      await sql`SELECT username, email, password FROM users WHERE email = ${email} AND authorized = true`;

    if (!rows.length || !bcrypt.compareSync(password, rows[0].password)) {
      result.data = null;
    } else {
      result.data = {
        username: rows[0].username,
        email: rows[0].email,
      };
    }
  } catch (e) {
    result.error = "Error al tratar de conectar con la base de datos";
  }

  return result;
};
