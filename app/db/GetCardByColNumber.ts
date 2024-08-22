"use server";

import { sql } from "@vercel/postgres";

export default async function GetCardByColNumber(card_id: number) {
  const { rows } =
    await sql`SELECT title, name, legend, type, rarity, "unique", cost, limited, immune, ability, expansion, designer, language, collection_number, faction FROM cards WHERE collection_number = ${card_id}`;

  return rows.map(({ collection_number, cost, faction, ...row }) => {
    return {
      collectionNumber: collection_number.toString(),
      cost: cost !== null ? cost.toString() : "",
      faction: faction ? faction.toString() : "",
      ...row,
    };
  })[0];
}
