export function locationPane(city) {
	city = {
		city, country, description, locale_time, timezone
	};
	
	const locationContainer = document.createElement("div");
  locationContainer.id = "location-container";
  locationContainer.className = "weather-item";

	const location = document.createElement("div");
  location.id = "location";
  location.innerHTML = `${city.toUpperCase()}, ${country.toUpperCase()}`;

  const description = document.createElement("div");
  description.id = "description";
  description.innerHTML = description.toUpperCase();
  
  const localeTime = document.createElement("div");
  localeTime.id = "locale-time";
  const timeConverter = new Date(locale_time * timezone);
  localeTime.innerHTML = `${timeConverter}`

	locationContainer.appendChild(location);
  locationContainer.appendChild(description);
  description.appendChild(localeTime);

	return locationContainer;
}