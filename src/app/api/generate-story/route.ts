import { google } from "@ai-sdk/google";
import { generateText } from "ai";

import { type NextRequest, NextResponse } from "next/server";

import { HISTORY_PROMPTS } from "@/lib/prompts";
import { GenerateStoryRequest } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const {
      usserMessage,
      conversationHistory,
      isStart,
      genre,
    }: GenerateStoryRequest = await request.json();
    let prompt = HISTORY_PROMPTS.INITIAL_HISTORY(genre);

    if (!isStart) {
      const historyText = conversationHistory
        .map((message) => `${message.role}: ${message.content}`)
        .join("\n");

      prompt = HISTORY_PROMPTS.CONTINUE_HISTORY(historyText, usserMessage);
    }

    const { text } = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt,
    });
    const [narrative, imagePrompt] = text.split("IMAGEN: ");
    return NextResponse.json({ narrative, imagePrompt });
  } catch (error) {
    console.log("Error al generear la hisoria:", error);
    return NextResponse.json(
      { error: "Erro al generear la hisoria:" },
      { status: 500 }
    );
  }
}
