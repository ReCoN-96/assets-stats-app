import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

moment().format();

const useAmountRequest = (url) => {
  const [state, setState] = useState({
    accountBalanceYesterday: 0,
    accountBalanceToday: 0,
    variation: 0,
    totalAmount: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const { accountBalanceToday } = response.data.find(({ date }) => moment().isSame(moment(date), 'day'));
      const amountYesterday = response.data.find(({ date }) => moment().isSame(moment(date).add(1, 'day'), 'day'));
      const accountBalanceYesterday = amountYesterday.accountBalanceToday;
      const totalAmount = response.data.filter(
        ({ date }) => moment(date).isSameOrBefore(moment(), 'day'),
      );
      const variation = (
        (accountBalanceToday - accountBalanceYesterday)
        / accountBalanceToday) * 100;
      setState({
        accountBalanceYesterday,
        accountBalanceToday,
        variation,
        totalAmount,
      });
    };
    fetchData();
  }, [url]);
  return state;
};

export default useAmountRequest;
