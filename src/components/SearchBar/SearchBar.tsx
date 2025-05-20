import { FC, useState, FormEvent } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedQuery = searchTerm.trim();

    if (!trimmedQuery) return;

    onSubmit(trimmedQuery);
    setSearchTerm('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
