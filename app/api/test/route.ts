import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET() {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { success: false, error: "OPENAI_API_KEY not found in environment variables" },
        { status: 500 }
      );
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Say 'Hello from MedAI API'" }],
    });

    const output = response.choices[0]?.message?.content || "No response";

    return NextResponse.json({ 
      success: true, 
      output: output,
      apiKeyPresent: !!process.env.OPENAI_API_KEY
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}



