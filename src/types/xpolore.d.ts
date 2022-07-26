export interface Hanzi {
  id: string;
  name: string;
  pinyin: string;
  translation: {
    en: string;
    es: string;
  };
  tags: string[];
  type?: HanziTypes;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export enum HanziTypes {
  Adjective = 'adjective',
  Noun = 'noun',
  Sentence = 'sentence',
  Verb = 'verb',
}
