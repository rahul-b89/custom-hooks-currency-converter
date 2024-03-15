import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  //this custom hook will return some data by calling an API (we want to call the api only when the hook is loaded or used)
  //so we have useEffect hook which is invoked whenever a component is mounted or its lifecycle event is triggered

  const [data, setData] = useState({}); //passing an empty object as default value so that the loop can run on empty object atleast when no value is returned from API

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //the api data returns a string sp converting the response to json from string
      .then((res) => setData(res[currency])); //accesing value from the json response using currency key
  }, [currency]); //our re-render depends on type of currency we are passing in the url
  console.log(data);

  return data;
}

export default useCurrencyInfo;
