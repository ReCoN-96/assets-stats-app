/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import requestReducer, { REQUEST_STATUS } from '../reducers/request';
import {
  GET_ALL_FAILURE,
  GET_ALL_SUCCESS,
} from '../actions/request';

const useRequestWithParams = (baseUrl, routeName, params) => {
  const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Object.keys(params).length === 0) {
          dispatch({ type: GET_ALL_SUCCESS, records: [] });
        } else {
          const response = await axios.get(`${baseUrl}/${routeName}`, {
            params,
          });
          dispatch({
            type: GET_ALL_SUCCESS,
            records: response.data,
          });
        }
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_ALL_FAILURE,
            error: e,
          });
        }
      }
    };
    fetchData();
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [baseUrl, routeName, params]);

  const propsLocal = {
    records,
    status,
    error,
  };
  return propsLocal;
};

export default useRequestWithParams;
