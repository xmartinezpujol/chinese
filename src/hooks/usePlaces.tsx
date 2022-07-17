import { useStaticQuery, graphql } from 'gatsby';

export interface PlacesQueryResult {
  id: string;
  type: string;
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

export const usePlaces = () => {
  const { places } = useStaticQuery(
    graphql`
      query PlacesQuery {
        places: allMongodbChineseHanzi {
          nodes {
            id
            type
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
  return places;
};
