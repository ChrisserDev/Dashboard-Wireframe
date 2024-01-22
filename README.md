# Personal Dashboard (Chrome Extension)

## Overview:

  This code implements a simplified version of a Chrome extension inspired by the Momentum extension. It creates a dynamic new tab experience with background images fetched from Unsplash, a clock that updates in real-time, and displays weather information based on the user's geolocation. Additionally, users can select a cryptocurrency from a dropdown menu to view real-time market data, including the current price, 24-hour high, and 24-hour low.

## Here's a breakdown of key features:

### Background Image:
  
  Fetches a random nature-themed image from Unsplash and sets it as the background for the new tab.

### Clock:
  
  Displays the current time in a clean and centered format. The time updates every second.

### Weather Information:
   
   Uses the user's geolocation to fetch real-time weather data from OpenWeatherMap.
   Displays weather information, including an icon representing the weather condition, temperature in Celsius, and the city name.

### Cryptocurrency Data:
   
   Provides a dropdown menu where users can select a cryptocurrency (Bitcoin, Ethereum, Tether, Solana, Litecoin).
  Fetches real-time market data for the selected cryptocurrency using the CoinGecko API.
  Displays the cryptocurrency logo, name, current price, 24-hour high, and 24-hour low.

### Error Handling:
  
  Handles errors gracefully, displaying a default background image and author information if Unsplash or cryptocurrency API requests fail.

### Styling:
Applies a visually appealing and responsive layout with a dark theme, using the Poppins font.


