"use server";

import { sql } from "@vercel/postgres";

export const getImageById = async (id: number) => {
  // const { rows } = await sql`
  //   SELECT name, data
  //   FROM images
  //   WHERE id = ${id};
  // `;
  // SELECT name, encode(data, 'base64') AS data
  const { rows } = await sql`
    SELECT collection_number, base64_data as data
    FROM card_images
    WHERE collection_number = ${id};
  `;
  return rows[0];
};