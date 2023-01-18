interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Result<Data> {
  info: Info;
  results: Array<Data>;
}

interface CharacterEntity {
  name: string;
  url: string;
}

type Url = string;
type Gender = 'female' | 'male' | 'genderless' | 'unknown';
type Status = 'alive' | 'dead' | 'unknown';
interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: Url[];
  url: Url;
  created: string;
}
