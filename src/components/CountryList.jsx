import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../actions/countryActions';

const CountryList = ({ filter }) => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries);
  const { loading, countries, error } = countriesData;

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countries.filter(country => {
    if (filter === "All") return true;
    return country.region === filter;
  });

  const loadMore = () => {
    if (page * itemsPerPage >= filteredCountries.length) {
      setHasMore(false);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const displayedCountries = filteredCountries.slice(0, page * itemsPerPage);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="country-list">
        {displayedCountries.map((country) => (
          <div className="country-card d-flex align-items-center gap-4" key={country.alpha3Code}>
            <img src={country.flag} style={{ width: '80px', height: '60px' }} alt={country.name} />
            <div className="d-flex flex-column align-items-start">
              <h5>{country.name}</h5>
              <p>{country.region}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CountryList;
