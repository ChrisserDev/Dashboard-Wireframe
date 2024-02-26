// Fetch a random nature photo from Unsplash API
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // Set the fetched image as the body's background
        document.body.style.backgroundImage = `url(${data.urls.regular})`;

        const authorOrLocation = document.getElementById("author");

        if (data.location && data.location.city) {
            // Check if both city and country are available
            const locationText = data.location.country ? `${data.location.city}, ${data.location.country}` : data.location.city;
            authorOrLocation.textContent = `Location: ${locationText}`;
        } else {
            // If location is not available, display the author's name
            authorOrLocation.textContent = `By: ${data.user.name}`;
        }
    })
    .catch(err => {
        // Use a default background image/author if there's an error.
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    });

// Event listener for changes on the cryptocurrency select element
document.getElementById("crypto-coins").addEventListener("change", function() {
   
    const selectedCoin = document.getElementById("crypto-coins").value;

    // Fetch information about the selected cryptocurrency from CoinGecko API
    fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}`)
        .then(res => {
            if (!res.ok) {
                throw Error("Something went wrong");
            }
            return res.json();
        })
        .then(data => {
            document.getElementById("crypto-top").innerHTML = `
                <div class="crypto-logo">
                    <img src=${data.image.small} />
                    <span>${data.name}</span>
                </div>
                <div>
                    <p>🎯 £${data.market_data.current_price.gbp}</p>
                    <p>⬆️ £${data.market_data.high_24h.gbp}</p>
                    <p>⬇️ £${data.market_data.low_24h.gbp}</p>
                </div>
            `
        })
        .catch(err => console.error(err));
});

// Function to update the current time every second
function getCurrentTime() {
    const date = new Date()
    // Update the 'time' element with the current time, formatted in a short style
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
};

setInterval(getCurrentTime, 1000);

// Get the user's current position
navigator.geolocation.getCurrentPosition(position => {

    // Extract latitude and longitude from the position object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Fetch weather data for the current location from OpenWeatherMap API
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
