import { useEffect, useState, } from 'react';

const useSearch = (search) => {

  // const [book, setBook] = useState('foundation');
  const [searchRes, setSearchRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();

  const handleSearch = async (lookup) => {
    try {
      setLoading(true);
      console.log(search);

      const result = await fetch(`url/${lookup}`);
      const json = result.json();
    } catch (error) {
      console.error(error);
      setErr(err);
      setLoading(false);
    } finally {
      setLoading(false);
      setSearchRes(json);
    }
  }

  useEffect(() => {

    if (search) {
      handleSearch(search);
    }

  }, [search])

  return [searchRes, loading, err];
}
export default useSearch;