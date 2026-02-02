import { NextResponse } from "next/server";
import GetCards from "../../db/GetCards";

export async function GET() {
  try {
    const cards = await GetCards();
    return NextResponse.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      { message: "Failed to load cards" },
      { status: 500 }
    );
  }
}