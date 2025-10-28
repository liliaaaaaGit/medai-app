import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const schema = z.object({
  mode: z.enum(["acute", "chronic"]),
  age: z.number().min(0).max(120),
  sex: z.enum(["female", "male", "diverse", "unspecified"]),
  symptoms: z.string().min(1).max(2000)
});

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      prompt: {
        id: "pmpt_68ff82e781f48190a9d6f7607895185d088f52d146c79165",
        version: "3"
      },
      input: `Return the diagnosis in JSON format. ${JSON.stringify({
        mode: parsed.mode,
        age: parsed.age,
        sex: parsed.sex,
        symptoms: parsed.symptoms
      })}`,
      text: {
        format: {
          type: "json_object"
        }
      },
      max_output_tokens: 2048,
      store: true
    });

    console.log("OpenAI Response:", JSON.stringify(response, null, 2));
    console.log("Output text:", response.output_text);

    let output;
    try {
      const outputText = response.output_text || "{}";
      output = typeof outputText === 'string' ? JSON.parse(outputText) : outputText;
    } catch (parseError: any) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw output text:", response.output_text);
      return NextResponse.json(
        { error: `Failed to parse OpenAI response: ${parseError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(output, {
      headers: { "Cache-Control": "no-store" }
    });
  } catch (error: any) {
    console.error("MedAI error:", error);
    return NextResponse.json(
      { error: error.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
