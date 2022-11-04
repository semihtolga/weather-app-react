import { useState } from "react";

const Main = () => {
  const [searchText, setSearchText] = useState("ankara");
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;
  const iconUrl = "https://openweathermaporg/img/wn/icon@2x.png";

  return (
    <section className="main">
      <form>
        <input type="text" placeholder="Seaach for a city" autoFocus />
        <button type="submit">SUBMIT</button>
        <span className="msg">error</span>
      </form>
      <div>
        <ul className="cities"></ul>
      </div>
    </section>
  );
};

export default Main;
