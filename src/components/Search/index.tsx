import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../redux/filter/slice';
import { RootState } from '../../redux/store';

import { debounce } from '../../utils/utils';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchValue = useSelector((state: RootState) => state.filter.searchValue);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');

  const changeSearchValue = React.useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setSearchValue(value));
      }, 1000),
    [dispatch],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setValue(value);
    changeSearchValue(value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');

    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        type="text"
        placeholder="Search"
      />
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      {searchValue ? (
        <svg
          className={styles.clearIcon}
          onClick={onClickClear}
          data-name="Capa 1"
          id="Capa_1"
          viewBox="0 0 20 19.84"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
        </svg>
      ) : null}
    </div>
  );
};

export default Search;
