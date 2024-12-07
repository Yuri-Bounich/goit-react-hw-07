import s from './SearchBox.module.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  selectFilteredContact,
} from '../../redux/filtersSlice.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilteredContact);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.input}>
      <span>Find contacts by name</span>
      <input type="text" value={query} onChange={handleChange} name="search" />
    </label>
  );
};

export default SearchBox;
