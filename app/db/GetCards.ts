"use server";

import { sql } from "@vercel/postgres";

export default async function GetCards() {
  const { rows } =
    await sql`SELECT id, title, name, legend, type, rarity, "unique", cost, limited, immune, ability, expansion, designer, language, collection_number, faction FROM cards`;

  return rows.map(({ id, collection_number, cost, faction, ...row }) => {
    return {
      id: id.toString(),
      collectionNumber: collection_number.toString(),
      cost: cost !== null ? cost.toString() : "",
      faction: faction ? faction.toString() : "",
      ...row,
    };
  });
}
