'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

interface FormData {
  genre: string;
  length: string;
  theme: string;
  characters: string;
  setting: string;
}

const genres = [
  'Fantasy',
  'Science Fiction',
  'Mystery',
  'Romance',
  'Horror',
  'Adventure'
];

export default function StoryGenerator() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    // Initialize form data from URL if available
    if (typeof window !== 'undefined') {
      const { formData: savedFormData } = router.query;
      if (savedFormData && typeof savedFormData === 'string') {
        try {
          return JSON.parse(savedFormData);
        } catch (e) {
          console.error('Error parsing form data:', e);
        }
      }
    }
    return {
      genre: '',
      length: '',
      theme: '',
      characters: '',
      setting: ''
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate story');
      }

      // Navigate to the story page with the generated story
      router.push({
        pathname: '/story',
        query: { 
          story: data.story,
          formData: JSON.stringify(formData)
        }
      });
      
      toast.success('Story generated successfully!');
    } catch (error) {
      console.error('Error generating story:', error);
      toast.error('Failed to generate story. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 rounded-xl p-8 border border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="genre" className="block text-white text-sm font-semibold mb-2">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select a genre</option>
            {genres.map(genre => (
              <option key={genre} value={genre.toLowerCase().replace(' ', '-')}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="length" className="block text-white text-sm font-semibold mb-2">
            Story Length
          </label>
          <select
            id="length"
            name="length"
            value={formData.length}
            onChange={handleChange}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select length</option>
            <option value="short">Short (&lt; 1000 words)</option>
            <option value="medium">Medium (1000-2500 words)</option>
            <option value="long">Long (&gt; 2500 words)</option>
          </select>
        </div>

        <div>
          <label htmlFor="theme" className="block text-white text-sm font-semibold mb-2">
            Theme (Optional)
          </label>
          <input
            type="text"
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="e.g., redemption, love, survival"
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="characters" className="block text-white text-sm font-semibold mb-2">
            Characters (Optional)
          </label>
          <input
            type="text"
            id="characters"
            name="characters"
            value={formData.characters}
            onChange={handleChange}
            placeholder="e.g., a brave knight, wise wizard"
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="setting" className="block text-white text-sm font-semibold mb-2">
            Setting (Optional)
          </label>
          <input
            type="text"
            id="setting"
            name="setting"
            value={formData.setting}
            onChange={handleChange}
            placeholder="e.g., medieval castle, space station"
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-full bg-[#2C3440] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#3A4553] transition-all duration-300 border border-[#4A5568] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Generating Story...' : 'Generate Story'}
        </button>
      </form>
    </div>
  );
}
