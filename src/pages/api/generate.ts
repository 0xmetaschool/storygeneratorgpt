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

    const prompt = `Generate a creative title and a ${length} story in the ${genre} genre.
    ${theme ? `Theme: ${theme}` : ''}
    ${characters ? `Characters: ${characters}` : ''}
    ${setting ? `Setting: ${setting}` : ''}
    Make it engaging and well-structured with a clear beginning, middle, and end.
    
    Format your response exactly like this:
    Title: [Your generated title here]
    Story: [Your generated story here]`;

    const completion = await openai.createChatCompletion({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: length === 'short' ? 500 : length === 'medium' ? 1000 : 2000,
    });

    const response = completion.data.choices[0]?.message?.content || '';
    
    // Parse title and story from the response
    const titleMatch = response.match(/Title:\s*(.*?)\s*\n/);
    const storyMatch = response.match(/Story:\s*([\s\S]*)/);
    
    const title = titleMatch ? titleMatch[1] : 'Untitled Story';
    const story = storyMatch ? storyMatch[1].trim() : response;

    res.status(200).json({ title, story });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).json({ error: 'Error generating story' });
  }
}
