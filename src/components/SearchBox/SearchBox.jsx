import s from './SearchBox.module.css';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectFilteredContact } from '../../redux/filtersSlice.js';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(selectFilteredContact(e.target.value));
  };

  return (
    <label className={s.input}>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleChange} name="search" />
    </label>
  );
};

export default SearchBox;
