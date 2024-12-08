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
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { genre, length, theme, characters, setting } = req.body;

    // Validate required fields
    if (!genre || !length) {
      return res.status(400).json({ error: 'Genre and length are required' });
    }

    // Create prompt based on user input
    let prompt = `Write a ${length} ${genre} story`;
    
    if (theme) {
      prompt += ` with the theme of ${theme}`;
    }
    
    if (characters) {
      prompt += ` featuring ${characters}`;
    }
    
    if (setting) {
      prompt += ` set in ${setting}`;
    }

    prompt += `. Make it engaging and creative.`;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a creative story writer. Write engaging stories based on the given parameters."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: length === 'short' ? 500 : length === 'medium' ? 1000 : 2000,
    });

    const story = completion.data.choices[0]?.message?.content || 'Failed to generate story';
    return res.status(200).json({ story });
    
  } catch (error: any) {
    console.error('Error generating story:', error);
    return res.status(500).json({ 
      error: 'Failed to generate story',
      details: error.message 
    });
  }
}
