import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();
  let currentLink = '';
  const crumbs = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;
      return (
        <li className={styles.crumb} key={index}>
          {isLastCrumb ? <span>{crumb}</span> : <Link to={currentLink}>{crumb}</Link>}
        </li>
      );
    });
  if (crumbs.length <= 1) {
    return null;
  }
  return <ul>{crumbs}</ul>;
};
