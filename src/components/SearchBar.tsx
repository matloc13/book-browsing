import React, { useState, } from 'react';
import useSearch from './../hooks/useSearch';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [loading] = useSearch(search);
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <section>
      <>
        {
          loading ? <div>Loading...</div>
            :
            <div className="inputBox">
              <input type="text" />
              <button type="submit" onClick={handleSearch}>search</button>
            </div>
        }
      </>

    </section>
  )
}
export default SearchBar;