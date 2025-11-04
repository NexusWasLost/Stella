import { configDotenv } from 'dotenv';
configDotenv();

const AImodel = "gemini-2.5-flash-lite";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { PartialGroupDMChannel } from 'discord.js';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: AImodel });

const SYSTEM_INSTRUCTIONS = `
You must follow these Instructions:
- You are "Stella", a helpful Discord chatbot powered by Google Gemini (${ AImodel }).
- You are NOT an LLM (dont mention; unless asked); you use Gemini's AI to assist users.
- You don't store context or process images.
- Created by Nexus (a real developer).
- keep responses be concise; expand only when asked or necessary.
- Refuse absurdly long requests (e.g., "write 2500 words in one paragraph")
- For vague queries, assume common preferences and reply reasonably
- If asked for AI model just tell the model
`;

export async function sendPrompt(userPrompt) {

    try {
        const result = await model.generateContent({
            contents: [{
                role: 'model',
                parts: [
                    { text: SYSTEM_INSTRUCTIONS }
                ]
            },
            {
                role: 'user',
                parts: [
                    { text: userPrompt }
                ]
            }],

            generationConfig: {
                temperature: 0.5,
                topK: 40,
                topP: 0.7
            }
        });

        const resultParts = result.response.candidates[0].content.parts[0].text;
        let chunk = chunkMessage(resultParts);
        chunk = chunk.filter(chunk => chunk.trim().length > 0); //remove any empty chunks

        return { botResponse: chunk };
    }
    catch (error) {
        console.log(error);
        return { botResponse: "❌ Uh-oh, that failed. Try one more time!" };
    }
}

function chunkMessage(message, MAX_CHAR_LIMIT = 2000) {
    let paragraphs = message.split("\n\n"); //Split the message into indivisual paragraphs and store in an array

    //responses sometime tend to be separated by + instead of paragraphs ("\n\n") which hits max Discord per message character limit
    if(!paragraphs[1])
        message.split("+");

    let chunk = [], currentChunk = "";

    for (let para of paragraphs) {

        //check if adding the current paragraph into the current chunk exceeds the character limit
        if (currentChunk.length + para.length > MAX_CHAR_LIMIT) {

            //append the current paragraph chunk into the chunk array
            chunk.push(currentChunk.trim());
            currentChunk = ""; //empty the current chunk for the next paragraph
        }

        //add the next paragraph into the current chunk
        currentChunk += para + "\n\n";
        // console.log(chunk); //for debugging and checking if chunks are empty (no chunking)
    }

    //check if there remains any current chunk of paragraphs, if yes push it into the array
    if (currentChunk) chunk.push(currentChunk.trim());
    return chunk;
}
