"use server";

import { sql } from "@vercel/postgres";

export default async function GetCards() {
  const { rows } =
    await sql`SELECT title, name, legend, type, rarity, "unique", cost, limited, immune, ability, expansion, designer, language, collection_number, faction FROM cards`;

  return rows.map(({ collection_number, cost, faction, ...row }) => {
    return {
      collectionNumber: collection_number.toString(),
      cost: cost !== null ? cost.toString() : "",
      faction: faction ? faction.toString() : "",
      ...row,
    };
  });
}
