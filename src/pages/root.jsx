import React from 'react';
import { useQuery } from 'react-query';

import { getCharacters } from '../utils/api/requests';

export const RootPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
    select: ({ data }) => {
      return data.results.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt='character' />
          <div>{character.name}</div>
        </div>
      ));
    }
  });

  if (isLoading) return <div>loading...</div>;

  return <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>{data}</div>;
};
