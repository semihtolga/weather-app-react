import React from 'react'

const WeatherCard = () => {
  return (
    <li className='city'>
      <h2 className='city-name'>
        <span>name</span>
        <sup>conutry</sup>
      </h2>
      <div className="city-name">
        temp
        <sup>°C</sup>
      </div>
      <figure>
        <img className='city-icon'  src="" alt="city-icon" />
        <figcaption>decsription</figcaption>
      </figure>
    </li>
  )
}

export default WeatherCard