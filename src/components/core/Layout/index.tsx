/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';

import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
  faLocationDot,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../../constant';
import { navigate } from 'gatsby';
import FAB from '../FAB';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSentences } from '../../../hooks/useSentences';
import { usePlaces } from '../../../hooks/usePlaces';
import { setCollection, setSentences } from '../../../redux/modules/hanzis';

const Layout = ({ children }) => {
  const places = usePlaces();
  const sentences = useSentences();
  const dispatch = useDispatch();

  const actions = [
    {
      label: 'Explore',
      icon: <FontAwesomeIcon icon={faMap} color={ColorPalette.DARK_BLUE_2} />,
      onClick: () => navigate('/explore/'),
    },
    {
      label: 'Flashcards',
      icon: (
        <FontAwesomeIcon icon={faLayerGroup} color={ColorPalette.DARK_BLUE_2} />
      ),
      onClick: () => navigate('/'),
    },
    {
      label: 'Places',
      icon: (
        <FontAwesomeIcon
          icon={faLocationDot}
          color={ColorPalette.DARK_BLUE_2}
        />
      ),
      onClick: () => navigate('/places/restaurant'),
    },
  ];

  useEffect(() => {
    dispatch(setCollection(places.nodes));
  }, [places]);

  useEffect(() => {
    dispatch(setSentences(sentences.nodes));
  }, [sentences]);

  return (
    <>
      <main>{children}</main>
      <FAB actions={actions} />
      <footer />
    </>
  );
};

export default Layout;
