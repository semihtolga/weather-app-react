import React from "react";

const WeatherCard = ({ name, sys, weather, main }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <li className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img className="city-icon" src={iconUrl} alt="city-icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
