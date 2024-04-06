/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

// here we are making custom hooks

function UseCurrencyInfo(currency) {
    const [data,setData] = useState({})
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    ).then((res) => res.json())
    .then((res)=> setData(res[currency]))
  }, [currency]);
  console.log(data);
  return data;
}

export {UseCurrencyInfo};