import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { genre, length, theme, characters, setting } = req.body;

    if (!genre || !length) {
      return res.status(400).json({ error: 'Genre and length are required' });
    }

    const prompt = `Write a ${length} story in the ${genre} genre.
    ${theme ? `Theme: ${theme}` : ''}
    ${characters ? `Characters: ${characters.join(', ')}` : ''}
    ${setting ? `Setting: ${setting}` : ''}
    Make it engaging and well-structured with a clear beginning, middle, and end.`;

    const completion = await openai.createChatCompletion({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: length === 'short' ? 500 : length === 'medium' ? 1000 : 2000,
    });

    const story = completion.data.choices[0]?.message?.content || '';
    res.status(200).json({ story });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ message: 'Error generating story' });
  }
}
