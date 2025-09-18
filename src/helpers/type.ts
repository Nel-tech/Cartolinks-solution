export interface HeroCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
}

export interface IconCard {
  id: number;
  title: string;
  isNew: boolean;
  description: string;
  buttonText: string;
  style: string;
  image: string;
}
