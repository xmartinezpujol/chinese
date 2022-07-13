import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

export const MAP_ICON_MARKERS = {
  COFFEE: 'Coffee Shop',
  RESTAURANT: 'Restaurant',
  SHOP: 'Shop',
  GREENPOINT: 'Green point',
};

const MAP_COLOR_MARKERS = {
  ORANGE: '#ff9400',
  BROWN: 'brown',
  BLUE: '#0564E5',
  GREEN: '#47A577',
};

const MAP_MARKER_STATUS = {
  ACTIVE: '#FFF',
  DEFAULT: '#000000',
};

function getMarkerProps(type) {
  let props = {};
  switch (type) {
    case MAP_ICON_MARKERS.COFFEE:
      props.color = MAP_COLOR_MARKERS.BROWN;
      props.icon = faCoffee;
      break;
    case MAP_ICON_MARKERS.SHOP:
      props.color = MAP_COLOR_MARKERS.ORANGE;
      props.icon = faStoreAlt;
      break;
    case MAP_ICON_MARKERS.RESTAURANT:
      props.color = MAP_COLOR_MARKERS.BLUE;
      props.icon = faUtensils;
      break;
    case MAP_ICON_MARKERS.GREENPOINT:
      props.color = MAP_COLOR_MARKERS.GREEN;
      props.icon = faRecycle;
      break;
    default:
      props.color = MAP_COLOR_MARKERS.ORANGE;
      props.icon = faStoreAlt;
      break;
  }
  return props;
}

function filterEntities(entities, filters) {
  if (filters.tags.length === 0 && filters.types.length === 0) {
    return entities;
  }

  if (filters.types.length > 0) {
    const filterEntitiesByType = entities.filter(node => {
      return filters.types.includes(node.node.data.type);
    });
    if (filters.tags.length === 0) {
      return filterEntitiesByType;
    }
    return filterEntitiesByType.filter(node =>
      node.node.tags.some(tag => filters.tags.includes(tag))
    );
  }
  return entities.filter(node =>
    node.node.tags.some(tag => filters.tags.includes(tag))
  );
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

function getFormattedDistance(distance) {
  if (distance > 1) {
    return `${distance.toFixed(1)} KM`;
  }
  return `${(distance * 1000).toFixed(0)} M`;
}

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

export {
  filterEntities,
  getFormattedDistance,
  getMarkerProps,
  getDistance,
  MAP_MARKER_STATUS,
};
