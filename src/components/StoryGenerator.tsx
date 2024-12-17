'use client';

import { useState, FormEvent } from 'react';
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
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation errors when user starts filling required fields
    if ((name === 'genre' || name === 'length') && value !== '') {
      setValidationErrors(prev => prev.filter(error => !error.includes(name)));
    }
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    if (!formData.genre) {
      errors.push('Please select a genre');
    }
    if (!formData.length) {
      errors.push('Please select a story length');
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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
      setValidationErrors(['Failed to generate story. Please try again.']);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Select Genre <span className="text-red-500">*</span>
          </label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${!formData.genre && validationErrors.length > 0 ? 'border-red-300' : 'border-gray-300'} 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200
                     bg-white/80 text-gray-800`}
          >
            <option value="">Choose a genre</option>
            {genres.map(genre => (
              <option key={genre} value={genre.toLowerCase().replace(' ', '-')}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Story Length <span className="text-red-500">*</span>
          </label>
          <select
            name="length"
            value={formData.length}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${!formData.length && validationErrors.length > 0 ? 'border-red-300' : 'border-gray-300'} 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200
                     bg-white/80 text-gray-800`}
          >
            <option value="">Select length</option>
            <option value="short">Short (&lt; 1000 words)</option>
            <option value="medium">Medium (1000-2500 words)</option>
            <option value="long">Long (&gt; 2500 words)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">Theme (Optional)</label>
          <input
            type="text"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="e.g., redemption, love, survival"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 
                     focus:ring-2 focus:ring-blue-200 transition-colors duration-200
                     bg-white/80 text-gray-800 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">Characters (Optional)</label>
          <input
            type="text"
            name="characters"
            value={formData.characters}
            onChange={handleChange}
            placeholder="e.g., a brave knight, wise wizard"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 
                     focus:ring-2 focus:ring-blue-200 transition-colors duration-200
                     bg-white/80 text-gray-800 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">Setting (Optional)</label>
          <input
            type="text"
            name="setting"
            value={formData.setting}
            onChange={handleChange}
            placeholder="e.g., medieval castle, space station"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 
                     focus:ring-2 focus:ring-blue-200 transition-colors duration-200
                     bg-white/80 text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Required Fields Missing:</h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isGenerating || !formData.genre || !formData.length}
          className={`w-full py-3 px-6 bg-[#2C3440] text-white text-sm font-semibold 
                   rounded-full hover:bg-[#3A4553] transition-all duration-300 
                   shadow-sm border border-[#4A5568]
                   ${isGenerating || !formData.genre || !formData.length ? 
                     'opacity-50 cursor-not-allowed' : 
                     'hover:scale-105'}`}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Story...
            </span>
          ) : (
            'Generate Story'
          )}
        </button>
      </form>
    </div>
  );
}
