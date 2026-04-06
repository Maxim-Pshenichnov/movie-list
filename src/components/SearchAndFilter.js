import React from 'react';

function SearchAndFilter({ searchTerm, onSearchChange, filterYear, onFilterChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      background: 'white',
      padding: '1rem',
      borderRadius: '20px',
      flexWrap: 'wrap'
    }}>
      <input
        type="text"
        placeholder="🔍 Поиск по названию или описанию..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ flex: 2, padding: '10px', borderRadius: '40px', border: '1px solid #ddd' }}
      />
      <input
        type="text"
        placeholder="Фильтровать по году выпуска"
        value={filterYear}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ flex: 1, padding: '10px', borderRadius: '40px', border: '1px solid #ddd' }}
      />
    </div>
  );
}

export default SearchAndFilter;