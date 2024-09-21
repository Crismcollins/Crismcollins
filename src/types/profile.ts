export type Language = 'en' | 'es';
export type SkillType = 'hard' | 'soft';

export interface User {
  full_name?: string;
  profession?: string;
  alias?: string;
  email?: string;
  linkedin_url?: string;
  study_title?: string;
  language?: Language;
  about_me?: string;
  id?: string;
}

export type Skill = {
  id?: number;
  user_id: number;
  name: string;
  type: SkillType;
  language: Language;
}

export type Education = {
  id?: number;
  user_id: number;
  title: string;
  institution: string;
  description: string;
  start_date: string;
  end_date: string;
  language: Language;
}

export type Job = {
  id?: number;
  user_id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  company: string;
  language: Language;
}

export type ProfilePicture = {
  mimeType: string;
  webViewLink: string;
  webContentLink: string;
  imageLink: string;
  id: string;
  name: string;
}
