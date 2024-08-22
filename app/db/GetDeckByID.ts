"use server";

import { sql } from "@vercel/postgres";

export default async function GetDeckByID(user_email: string, deck_id: number) {
  // TO-DO: Get more details from cards.
  // Or maybe we can do that in the frontend
  const { rows } =
    await sql`SELECT d.id, d.name, d.description, dc.card_id, dc.quantity FROM decks d
    JOIN deck_cards dc ON d.id = dc.deck_id
    JOIN users u ON d.createdBy = u.id WHERE d.id = ${deck_id} AND u.email = ${user_email}`;

  return rows.map(({ id, name, description, card_id, quantity, ...row }) => {
    return {
      id: id.toString(),
      name: name,
      description: description,
      card_id: card_id.toString(),
      quantity: quantity.toString(),
      ...row,
    };
  })[0];
}
