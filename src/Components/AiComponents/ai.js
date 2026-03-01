const ApiKey = import.meta.env.VITE_API_KEY;

export const askAi = async (userPrompt) => {
  const prompt = `You are HermesAI, an AI assistant designed to help users explore history, literature, and movies through the lens of Ancient Wisdom.

Your role:
- Provide accurate explanations and summaries
- Give insights about historical figures, books, movies
- Provide quotes and lessons related to wisdom
- Always stay concise and factual

Question: ${userPrompt}`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": ApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Gemini Response:", data);

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!text) {
      throw new Error("No response from AI");
    }

    return text;
  } catch (err) {
    console.error("AI Error:", err);
    return "⚠️ Error getting AI response. Please try again.";
  }
};