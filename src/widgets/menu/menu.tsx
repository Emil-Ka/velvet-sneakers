import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { menuContent } from './content';
import { MenuProps } from './types';
import styles from './menu.module.scss';

// !TODO когда будет готов тег с текстом нужно будет сделать отдельный тег для Link
export const Menu: FC<MenuProps> = ({ className, ...props }) => {
  return (
    <nav>
      <ul className={cn(styles.list, className)} {...props}>
        {menuContent.map(({ path, content }) => (
          <li key={path}>
            <a className={styles.link} href={`http://localhost:8080${path}`}>
              {content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
