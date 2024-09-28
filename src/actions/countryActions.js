import axios from 'axios';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error
});


export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    try {
      const response = await axios.get(`https://restcountries.com/v2/all?fields=name,region,flag`);
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountriesFailure(error.message));
    }
  };
};
