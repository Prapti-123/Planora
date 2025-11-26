import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0.4,
  maxTokens: 2000,
});

const itineraryTemplate = new PromptTemplate({
  template: `You are a travel planner. 
    
Input:
from: {from}
destination: {destination}
startDate: {startDate}
endDate: {endDate}
days: {days}
tourType: {tourType}
tripType: {tripType}
budget: {budget}
totalMembers: {totalMembers}
stayPreferences: {stayPreferences}
travelPreferences: {travelPreferences}

Produce ONLY valid JSON with structure:
{{
 "title": string,
 "description": string,
 "imgLink": string,
 "days": number,
 "nights": number,
 "startDate": string,
 "endDate": string,
 "total_budget_estimate": number,
 "day_wise": [{{"day":1,"title":"", "activities":[]}}],
 "tips": string
}}

Return *strictly valid JSON* with no extra text.`,
  inputVariables: [
    "from",
    "destination",
    "startDate",
    "endDate",
    "days",
    "tourType",
    "tripType",
    "budget",
    "totalMembers",
    "stayPreferences",
    "travelPreferences",
  ],
});

export async function generateItineraryWithLLM({
  from,
  destination,
  startDate,
  endDate,
  days,
  tourType,
  tripType,
  budget,
  totalMembers,
  stayPreferences,
  travelPreferences,
}) {
  const chain = RunnableSequence.from([itineraryTemplate, model]);
  
  const response = await chain.invoke({
    from,
    destination,
    startDate,
    endDate,
    days,
    tourType,
    tripType,
    budget,
    totalMembers,
    stayPreferences,
    travelPreferences,
  });

  let text = response?.content ?? "";

  // Try parsing response cleanly
  try {
    return JSON.parse(text);
  } catch {
    // Try extracting JSON from extra text
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error("Unable to parse LLM response as JSON.");
  }
}

