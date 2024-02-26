# Personal Dashboard (Chrome Extension)

https://personaldashboardextension.netlify.app/

## Overview

This code implements a simplified version of a Chrome extension inspired by the Momentum extension. It creates a dynamic new tab experience with background images fetched from Unsplash, a clock that updates in real-time, and displays weather information based on the user's geolocation. Additionally, users can select a cryptocurrency from a dropdown menu to view real-time market data, including the current price, 24-hour high, and 24-hour low.

## Functionalities

### Dynamic Background:

The website sets its background dynamically using a random nature-related image fetched from the Unsplash API. This provides a visually appealing and dynamic user experience.

### Weather Display

The website fetches weather data based on the user's geolocation using the OpenWeatherMap API. It then displays the weather icon, temperature, and city name on the webpage.

### Cryptocurrency Information:

Users can select a cryptocurrency from a dropdown menu ("crypto-coins"), and the website fetches and displays real-time information about the selected cryptocurrency using the CoinGecko API. The information includes the cryptocurrency logo, name, current price, 24-hour high, and 24-hour low.

### Real-Time Clock:

The website displays the current time, updating every second. This is achieved using the setInterval function to update the displayed time at regular intervals.

## Coding concepts used

### Asynchronous JavaScript (Promises):

Promises are used for handling asynchronous operations, particularly in fetching data from external APIs. The fetch function returns a Promise, and the .then() and .catch() methods are used to handle the results or errors.

### DOM Manipulation:

JavaScript is used to manipulate the Document Object Model (DOM). The fetched data is used to dynamically update the background image, weather information, cryptocurrency details, and other elements on the webpage.

### Event Handling:

Event listeners are used to handle user interactions. For example, the dropdown selection triggers a function to fetch and display cryptocurrency information. 

### Interval-Based Updates:

The setInterval function is used to repeatedly execute the getCurrentTime function, ensuring that the displayed time is updated every second.

### Error Handling:
The code includes error handling for API requests. If there is an error while fetching data from external APIs, the website provides a default background image and author information, ensuring a more robust user experience.

### CSS Styling:

CSS is used for styling the webpage, including responsive design using media queries. Specific styles are applied based on different screen sizes to enhance the user experience on various devices.
