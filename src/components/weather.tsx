import { useState, useEffect } from "react";

function Weather() {
  const [clima, setClima] = useState<any>(null);
  const API_KEY = "f185a144d581e8f34f30c1c9cda3cb73";
  const CITY_ID = "3856436";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=metric&lang=es`,
    )
      .then((res) => res.json())
      .then((data) => setClima(data));
  }, []);

  if (!clima) return <p>Cargando clima...</p>;
  const iconurl =
    "http://openweathermap.org/img/w/" + clima.weather[0].icon + ".png";
  console.log(clima);
  return (
    <div className="card card-side card-border bg-base-200 text-primary shadow-sm w-96 h-40 border-accent">
      <figure className="w-40">
        <img className="w-full object-cover" src={iconurl} alt="icon" />
      </figure>
      <div className="card-body items-center text-center w-60">
        <h2 className="card-title text-accent">
          {clima.weather[0].description}
        </h2>
        <h1 className="text-4xl">{clima.main.temp}°C</h1>
        <p>{clima.name}</p>
      </div>
    </div>
  );
}

export default Weather;
