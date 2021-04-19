import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

moment().format();

const useAmountRequest = () => {
  const [state, setState] = useState({
    amountToday: 0,
    totalAmount: 0,
    variationPastOneDay: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data/amount.json');
      const moneyEarnedToday = response.data.find(({ date }) => moment().isSame(moment(date), 'day'));
      const getAllDays = response.data.filter(
        ({ date }) => moment(date).isSameOrBefore(moment()),
      );
      const accountBalance = getAllDays.reduce(
        (acc, { amount }) => acc + amount, 0,
      );
      const accountBalanceYesterday = accountBalance - moneyEarnedToday.amount;
      const calculVariation = (
        (accountBalance - accountBalanceYesterday)
        / accountBalance) * 100;
      setState({
        accountBalanceYesterday,
        accountBalance,
        calculVariation,
      });
    };
    fetchData();
  }, []);
  return state;
};

export default useAmountRequest;
