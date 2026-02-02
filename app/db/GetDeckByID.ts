"use server";

import { sql } from "@vercel/postgres";

export default async function GetDeckByID(user_email: string, deck_id: number) {
  const { rows } = await sql`
    SELECT 
      d.id, 
      d.name, 
      d.description, 
      d.strategy_card_id,
      sc.collection_number as strategy_collection_number,
      dc.card_id, 
      dc.quantity,
      c.name as card_name,
      c.collection_number as card_collection_number
    FROM decks d
    JOIN users u ON d.createdBy = u.id 
    LEFT JOIN cards sc ON d.strategy_card_id = sc.id
    LEFT JOIN deck_cards dc ON d.id = dc.deck_id
    LEFT JOIN cards c ON dc.card_id = c.id
    WHERE d.id = ${deck_id} AND u.email = ${user_email}
  `;

  if (rows.length === 0) return null;

  const deck = {
    id: rows[0].id.toString(),
    name: rows[0].name,
    description: rows[0].description,
    strategyCollectionNumber: rows[0].strategy_collection_number,
    cards: rows
      .filter((row) => row.card_id)
      .map((row) => ({
        id: row.card_id.toString(),
        name: row.card_name,
        collectionNumber: row.card_collection_number,
        quantity: row.quantity,
      })),
  };

  return deck;
}
