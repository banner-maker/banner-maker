import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styles from './SearchForm.module.scss';

const SearchForm = ({ onSearch, onRandom }) => {
  const [query, setQuery] = useState(null);

  return (
    <div className={styles['searchForm']}>
      <Input.Search
        placeholder="input search image"
        className={styles['searchForm__query']}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onSearch={() => onSearch(query)}
      />
      <Button type="primary" icon="sync" onClick={onRandom}>Random</Button>
    </div>
  );
};

export default SearchForm;
