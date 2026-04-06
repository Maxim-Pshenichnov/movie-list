import React, { useState } from 'react';

function MovieItem({ movie, onDelete, onEdit }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
  };

  const getShortDescription = (text) => {
    if (!text || text === 'Описание отсутствует') return text;
    if (text.length <= 100) return text;
    return text.substring(0, 100) + '...';
  };

  return (
    <div style={{
      background: 'white',
      padding: '1rem',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      marginBottom: '0.75rem',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Постер */}
        <div style={{ flexShrink: 0 }}>
          <img 
            src={movie.posterUrl || 'https://via.placeholder.com/300x450?text=No+Poster'} 
            alt={movie.title}
            onError={handleImageError}
            style={{ 
              width: '80px', 
              height: '120px', 
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
          />
        </div>
        
        {/* Информация */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <strong style={{ fontSize: '1.1rem' }}>{movie.title}</strong> 
              <span style={{ marginLeft: '0.5rem', color: '#475569' }}>({movie.year})</span>
            </div>
            
            <div>
              <button 
                onClick={() => onEdit(movie)} 
                style={{ 
                  marginRight: '0.5rem', 
                  background: '#f59e0b', 
                  color: 'white', 
                  border: 'none', 
                  padding: '6px 12px', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
              >
                Редактировать
              </button>
              <button 
                onClick={() => onDelete(movie.id)} 
                style={{ 
                  background: '#ef4444', 
                  color: 'white', 
                  border: 'none', 
                  padding: '6px 12px', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
              >
                🗑 Удалить
              </button>
            </div>
          </div>
          
          {/* Описание */}
          {movie.description && movie.description !== 'Описание отсутствует' && (
            <div 
              style={{ 
                marginTop: '8px', 
                color: '#475569', 
                fontSize: '0.9rem',
                lineHeight: '1.4',
                cursor: 'pointer',
                background: '#f8fafc',
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            >
              {isDescriptionVisible ? movie.description : getShortDescription(movie.description)}
              {movie.description.length > 100 && (
                <span style={{ color: '#3b82f6', marginLeft: '5px', fontSize: '0.85rem' }}>
                  {isDescriptionVisible ? ' (свернуть)' : ' (читать полностью)'}
                </span>
              )}
            </div>
          )}
          
          {/* Нет описания */}
          {(!movie.description || movie.description === 'Описание отсутствует') && (
            <div style={{ 
              marginTop: '8px', 
              color: '#94a3b8', 
              fontSize: '0.85rem',
              fontStyle: 'italic'
            }}>
              Нет описания
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieItem;