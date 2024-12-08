import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API Key');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

  const prompt = `Generate a ${genre} story with approximately ${lengthWords[length]} words.
    ${theme ? `Theme: ${theme}` : ''}
    ${characters?.length ? `Main characters: ${characters.join(', ')}` : ''}
    ${setting ? `Setting: ${setting}` : ''}
    Make it engaging and well-structured with a clear beginning, middle, and end.`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: Math.floor(lengthWords[length] * 1.5),
  });

  return completion.choices[0].message.content;
}
