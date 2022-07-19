import { useEffect, useState } from 'react';

export default function useCurrentWidth() {
  // save current window width in the state object
  const [width, setWidth] = useState(0);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const getWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWidth(getWidth());

    // timeoutId for debounce mechanism
    let timeoutId: ReturnType<typeof setTimeout>;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
}
