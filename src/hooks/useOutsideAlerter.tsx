import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref: any) {
  const [isClickOutside, setClickOutside] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickOutside(true);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isClickOutside;
}

/**
 * Component that calls an event if you click outside of it
 */
export default function OutsideClicker(props: any) {
  const wrapperRef = useRef(null);
  const isClickOutside = useOutsideClick(wrapperRef);

  if (isClickOutside) {
    props.onClickOutside();
  }

  return <div ref={wrapperRef}>{props.children}</div>;
}
