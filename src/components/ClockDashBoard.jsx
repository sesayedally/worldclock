import React from "react";
import CityTime from "./CityTime";

export default function ClockDashBoard() {
  const cities = [
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Johannesburg", timezone: "Africa/Johannesburg" },
  ];

  return (
    <>
      <div className="world-clock">
        <h1>Clock DashBoard</h1>
        <div className="cities">
          {cities.map((city, index) => (
            <CityTime city={city} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
