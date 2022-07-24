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
import { usePlaces } from '../../../hooks/usePlaces';
import { useEffect } from 'react';
import { setCollection } from '../../../redux/modules/hanzis';
import { useDispatch } from 'react-redux';

const Layout = ({ children }) => {
  const places = usePlaces();
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

  return (
    <>
      <main>{children}</main>
      <FAB actions={actions} />
      <footer />
    </>
  );
};

export default Layout;
