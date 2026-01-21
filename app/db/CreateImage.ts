"use server";

import { sql } from "@vercel/postgres";
import fs from "fs";

export const CreateImage = async (filePath: string, imageName: string) => {
  // const imageBuffer = fs.readFileSync(filePath);

  fs.readFile(filePath, async (err, data) => {
    if (err) {
      console.error("Error reading the file", err);
      return;
    }

    // Convert to base64
    const base64Image = data.toString("base64");
    // console.log(base64Image);

    // Now you can use the base64Image string as needed
    const { rows } = await sql`
      INSERT INTO card_images (collection_number, base64_data)
      VALUES (${imageName}, ${base64Image})
      RETURNING collection_number;
    `;
    return rows[0].collection_number;
  });
};
