import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [searchText, setSearchText] = useState("hatay");
  const [allWeather, setAllWeather] = useState([]);
  const [error, setError] = useState("");
  
  let apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  const getWeather = async () => {
    const { data } = await axios(url);
    const { name, sys, weather, main } = data;
    const city = allWeather.some(
      (item) => item.name.toLowerCase() === searchText.toLowerCase()
    );
    if (city) {
      setError("bu şehir mevcut ");
      setTimeout(() => setError(), 3000);
    } else {
      setAllWeather([...allWeather, { name, sys, weather, main }]);
    }
  };
  console.log(allWeather);

  useEffect(() => {
    getWeather();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("şehir giriniz");
      setTimeout(() => setError(), 3000);
    } else {
      getWeather();
      setSearchText("");
    }
  };

  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          value={searchText}
          placeholder="Search for a city"
          autoFocus
        />
        <button type="submit">SUBMIT</button>
        <span className="msg">{error}</span>
      </form>
      <div className="container">
        <ul className="cities">
          {allWeather.map((item, index) => (
            <WeatherCard key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
