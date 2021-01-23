import { useEffect, useState } from 'react';

const useRates = url => {
  const [rates, setRates] = useState([]);
  useEffect(() => {
    window
      .fetch(url, {mode: 'no-cors'})
      .then(response => response.json())
      .then(data => setRates(data));
  }, []);
  return rates;
};

export default useRates;
