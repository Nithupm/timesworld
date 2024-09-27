import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/all?fields=name,region,flag`
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries", error);
    }
  };

  const loadMore = () => {
    if (page * itemsPerPage >= countries.length) {
      setHasMore(false);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const displayedCountries = countries.slice(0, page * itemsPerPage);

  return (
    <div>
      <div className="country-list">
        {displayedCountries.map((country) => (
          <div className="country-card d-flex align-items-center gap-4" key={country.alpha3Code}>
            <img src={country.flag} style={{width:'80px', height:'60px'}}/>
            <div className="d-flex flex-column align-items-start">
              <h3>{country.name}</h3>
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
