import { useStaticQuery, graphql } from 'gatsby';

export interface SentencesQueryResult {
  id: string;
  name: string;
  pinyin: string;
  translation: {
    en: string;
    es: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: string[];
}

export const useSentences = () => {
  const { sentences } = useStaticQuery(
    graphql`
      query SentencesQuery {
        sentences: allMongodbChineseSentences {
          nodes {
            id
            name
            pinyin
            translation {
              en
              es
            }
            coordinates {
              lat
              lng
            }
            tags
          }
        }
      }
    `
  );
  return sentences;
};
