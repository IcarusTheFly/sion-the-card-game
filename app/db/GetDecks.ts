"use server";

import { sql } from "@vercel/postgres";

export default async function GetDecks(user_email: string) {
  const { rows } = await sql`SELECT d.id, d.name, d.description FROM decks d 
    JOIN users u ON d.createdBy = u.id WHERE u.email = ${user_email}`;

  return rows.map(({ id, name, description, ...row }) => {
    return {
      id: id.toString(),
      name: name,
      description: description,
      ...row,
    };
  });
}
