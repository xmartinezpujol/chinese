import { useState, useEffect } from 'react';

export interface usePositionArgs {
  watch: boolean;
  settings: DefaultSettings;
}

interface DefaultSettings {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface Position {
  latitude?: string;
  longitude?: string;
  accuracy?: string;
  timestamp?: string;
}

interface PositionValues {
  latitude?: string;
  longitude?: string;
  accuracy?: string;
  timestamp?: string;
  error?: string;
}

const defaultSettings: DefaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export function usePosition<usePositionArgs>(
  watch = false,
  settings = defaultSettings
): PositionValues {
  const [position, setPosition] = useState<Position>({});
  const [error, setError] = useState<string>('');

  const onChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings]);

  return { ...position, error };
}
