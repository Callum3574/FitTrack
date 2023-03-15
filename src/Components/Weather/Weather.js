export const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Manchester, uk&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const data = await res.json();

  let message;
  let icon;
  switch (data.weather[0].main) {
    case "Rain":
      message = "Maybe go to the Gym!";
      icon = "🌧";
      break;
    case "Wind":
      message = "Windy.. Walkable..";
      icon = "💨";
      break;
    case "Clouds":
      message = "No excuse, let's walk";
      icon = "☁️";
      break;
    case "Snow":
      message = "Let's walk, but be careful!";
      icon = "⛄️";
      break;
    case "Clear":
      message = "Perfect for a walk!";
      icon = "☀️";
      break;
    case "Drizzle":
      message = "Hood up, let's go for a walk";
      icon = "☔️";
      break;
    default:
      message = "confused";
      icon = "⁉️";
  }

  const weatherFormatted = {
    celsius: Math.round(data.main.temp - 273.15),
    type: data.weather[0].main,
    icon: icon,
    message: message,
  };

  return weatherFormatted;
};
