import { useEffect, useState } from "react";
import "./Country.css";
import Countries from "../Countries/Countries";

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <div className="container">
      {countries.map((Country) => (
        <Countries
          name={Country.name.common}
          flags={Country.flags}
          capital={Country.capital}
        >

        </Countries>
      ))}
    </div>
  );
};

export default Country;
