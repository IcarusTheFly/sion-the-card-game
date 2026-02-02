"use server";

import { sql } from "@vercel/postgres";

export default async function GetDecks(user_email: string) {
  const { rows } = await sql`
    SELECT
      d.id,
      d.name,
      d.description,
      d.strategy_card_id,
      c.collection_number as strategy_collection_number
    FROM decks d 
    JOIN users u ON d.createdBy = u.id 
    LEFT JOIN cards c ON d.strategy_card_id = c.id
    WHERE u.email = ${user_email}
  `;

  return rows.map(({ id, name, description, strategy_collection_number, ...row }) => {
    return {
      id: id.toString(),
      name: name,
      description: description,
      strategyCollectionNumber: strategy_collection_number,
      ...row,
    };
  });
}
