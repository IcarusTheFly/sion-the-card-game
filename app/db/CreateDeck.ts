"use server";

import { sql } from "@vercel/postgres";

export type CreateDeckResult = {
  success: boolean;
  message: string;
  deckId?: number;
};

export default async function CreateDeck(
  user_email: string,
  deck_name: string,
  deck_description: string,
  cards: { id: string; quantity: number }[],
  strategy_card_id: string
): Promise<CreateDeckResult> {
  try {
    // 0. Ensure strategy_card_id column exists (Simple migration)
    try {
      await sql`ALTER TABLE decks ADD COLUMN IF NOT EXISTS strategy_card_id INTEGER`;
    } catch (e) {
      console.log("Migration or column already exists", e);
    }

    // 1. Get User ID
    const userResult = await sql`SELECT id FROM users WHERE email = ${user_email}`;
    if (userResult.rowCount === 0) {
      return { success: false, message: "User not found" };
    }
    const userId = userResult.rows[0].id;

    // 2. Create Deck
    const deckResult = await sql`
      INSERT INTO decks (name, description, createdBy, strategy_card_id)
      VALUES (${deck_name}, ${deck_description}, ${userId}, ${strategy_card_id})
      RETURNING id
    `;
    const deckId = deckResult.rows[0].id;

    // 3. Insert Cards
    // Filter out cards with 0 quantity just in case
    const cardsToInsert = cards.filter((c) => c.quantity > 0);

    for (const card of cardsToInsert) {
      await sql`
        INSERT INTO deck_cards (deck_id, card_id, quantity)
        VALUES (${deckId}, ${card.id}, ${card.quantity})
      `;
    }

    return { success: true, message: "Deck created successfully", deckId };
  } catch (error) {
    console.error("Error creating deck:", error);
    return { success: false, message: "Failed to create deck" };
  }
}
