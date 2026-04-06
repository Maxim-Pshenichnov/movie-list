import React, { useState, useEffect } from 'react';

function MovieForm({ onSave, editingMovie, clearEditing }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [description, setDescription] = useState('');
  const [posterPreview, setPosterPreview] = useState('');

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setYear(editingMovie.year);
      setPosterUrl(editingMovie.posterUrl || '');
      setDescription(editingMovie.description || '');
      setPosterPreview(editingMovie.posterUrl || '');
    } else {
      setTitle('');
      setYear('');
      setPosterUrl('');
      setDescription('');
      setPosterPreview('');
    }
  }, [editingMovie]);

  const handlePosterUrlChange = (e) => {
    const url = e.target.value;
    setPosterUrl(url);
    setPosterPreview(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || year.trim() === '') return;

    onSave({
      id: editingMovie ? editingMovie.id : Date.now(),
      title: title.trim(),
      year: year.trim(),
      posterUrl: posterUrl.trim() || 'https://via.placeholder.com/300x450?text=No+Poster',
      description: description.trim() || 'Описание отсутствует'
    });

    setTitle('');
    setYear('');
    setPosterUrl('');
    setDescription('');
    setPosterPreview('');
    if (clearEditing) clearEditing();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'white',
      padding: '1.5rem',
      borderRadius: '24px',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h3>{editingMovie ? 'Редактирование' : 'Добавить фильм'}</h3>
      
      <input
        type="text"
        placeholder="Название фильма *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '12px', border: '1px solid #ccc' }}
        required
      />
      
      <input
        type="text"
        placeholder="Год выпуска *"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '12px', border: '1px solid #ccc' }}
        required
      />
      
      {/* Поле для URL постера */}
      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          URL постера (ссылка на изображение):
        </label>
        <input
          type="text"
          placeholder="https://example.com/poster.jpg"
          value={posterUrl}
          onChange={handlePosterUrlChange}
          style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid #ccc' }}
        />
        
        {posterPreview && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ fontSize: '14px', marginBottom: '5px' }}>Предпросмотр:</p>
            <img 
              src={posterPreview} 
              alt="Предпросмотр постера" 
              style={{ maxWidth: '100px', maxHeight: '150px', borderRadius: '8px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450?text=Invalid+URL';
              }}
            />
          </div>
        )}
      </div>

      {/* Поле для описания */}
      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Краткое описание:
        </label>
        <textarea
          placeholder="Введите краткое описание фильма"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '12px', 
            border: '1px solid #ccc',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
        />
      </div>
      
      <button type="submit" style={{
        background: '#3b82f6', 
        color: 'white', 
        border: 'none', 
        padding: '10px 20px', 
        borderRadius: '40px', 
        cursor: 'pointer', 
        fontWeight: 'bold'
      }}>
        {editingMovie ? 'Сохранить изменения' : 'Добавить фильм'}
      </button>
      
      {editingMovie && (
        <button type="button" onClick={clearEditing} style={{ 
          marginLeft: '10px', 
          background: '#94a3b8', 
          color: 'white', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '40px', 
          cursor: 'pointer' 
        }}>
          Отмена
        </button>
      )}
    </form>
  );
}

export default MovieForm;