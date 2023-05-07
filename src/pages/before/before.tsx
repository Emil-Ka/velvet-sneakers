import React from 'react';
import { useSelector } from 'react-redux';

export const Before = () => {
  const { data } = useSelector((state) => state.before);

  return (
    <div>
      {data.map(({ title }) => (
        <h1 key={title}>{title}</h1>
      ))}
    </div>
  );
};
