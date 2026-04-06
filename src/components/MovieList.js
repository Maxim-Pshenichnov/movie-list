import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, onDelete, onEdit }) {
  if (movies.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        padding: '3rem',
        background: 'white',
        borderRadius: '16px',
        color: '#94a3b8'
      }}>
        Нет фильмов
      </div>
    );
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem 
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default MovieList;