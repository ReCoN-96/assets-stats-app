import { useState, useEffect } from 'react';
import axios from 'axios';

const useAssetsRequest = (url) => {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const totalAmountAssets = response.data.reduce(
        // eslint-disable-next-line camelcase
        (acc, { quantity, actual_price }) => acc + (quantity * actual_price), 0,
      );
      const assetsWithPart = [];

      response.data.forEach((element) => {
        const part = (100 - (
          (totalAmountAssets - (element.quantity * element.actual_price))
          / totalAmountAssets)
          * 100).toFixed(2);
        assetsWithPart.push({
          part,
          ...element,
        });
      });
      setAssets(assetsWithPart);
    };
    fetchData();
  }, [url]);
  return [assets, setAssets];
};

export default useAssetsRequest;
