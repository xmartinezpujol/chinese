import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ColorPalette } from '../../../constant';
import cn from 'classnames';
import * as React from 'react';

import './styles.scss';
import useCurrentWidth from '../../../hooks/useCurrentWidth';

const FAB = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const width = useCurrentWidth();

  function handleAction(action) {
    setOpen(false);
    action.onClick();
  }

  return (
    <>
      <div
        className={cn('backdrop', { open })}
        onClick={() => open && setOpen(false)}
      />
      <ul className={cn('fab-container', { open })}>
        <li className="fab-button">
          <FontAwesomeIcon
            icon={faPlus}
            color={ColorPalette.DARK_BLUE_2}
            onClick={() => setOpen(!open)}
          />
        </li>
        {actions.map((action, index) => (
          <li
            style={{ transitionDelay: `${index * 25}ms` }}
            className={cn('fab-action', { open })}
            key={action.label}
            onClick={() => handleAction(action)}
          >
            {action.icon}
            <span
              className="tooltip"
              style={{
                opacity: width > 500 ? null : 1,
                transform: width > 500 ? null : 'translateX(-100%)',
              }}
            >
              {action.label}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FAB;
