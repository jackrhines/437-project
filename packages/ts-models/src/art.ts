export interface Art {
  artId: string;
  title: string;
  artist: string;
  description: string;
  genres: string[];
  mediums: string[];
  image: string | undefined;
}