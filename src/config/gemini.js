const apikey = "AIzaSyC_Lnl9yrqnPjedtFu1rlTeNsYs_3Zf_Nc";

import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_GENAI_API_KEY;

const ai = new GoogleGenAI({
  apiKey,
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
}

export default await main;
