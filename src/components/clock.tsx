import { useState, useEffect } from "react";

function Clock() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  const hours = hora.toLocaleTimeString();
  const date = hora.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card card-border bg-base-200 text-primary w-96 h-40 shadow-2xl border-accent">
      <div className="card-body items-center text-center">
        <h1 className="card-title text-6xl">{hours}</h1>
        <p className="mt-2 text-accent">{date}</p>
      </div>
    </div>
  );
}

export default Clock;
