export interface Story {
  _id?: string;
  title: string;
  content: string;
  genre: string;
  length: 'short' | 'medium' | 'long';
  theme?: string;
  characters?: string[];
  setting?: string;
  userId?: string;
  createdAt: Date;
}
