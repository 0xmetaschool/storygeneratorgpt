import { Configuration, OpenAIApi } from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API Key');
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

export async function generateStory(
  genre: string,
  length: 'short' | 'medium' | 'long',
  theme?: string,
  characters?: string[],
  setting?: string
) {
  const lengthWords = {
    short: 300,
    medium: 800,
    long: 2000,
  };

  const prompt = `Write a ${length} story in the ${genre} genre.
    ${theme ? `Theme: ${theme}` : ''}
    ${characters ? `Characters: ${characters.join(', ')}` : ''}
    ${setting ? `Setting: ${setting}` : ''}
    Make it engaging and well-structured with a clear beginning, middle, and end.`;

  const completion = await openai.createChatCompletion({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: lengthWords[length],
  });

  return completion.data.choices[0]?.message?.content || '';
}
