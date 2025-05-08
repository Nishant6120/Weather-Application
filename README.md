# Weather-Application
This repository contains a basic web application that allows users to check the current weather for a specific city. It fetches weather data from the OpenWeatherMap API and displays essential information such as temperature, city name, humidity, and wind speed, accompanied by a relevant weather icon.

## Features
* **Search by City:** Users can input the name of a city into the provided search field and click the "Search" button to retrieve the current weather.
* **Display Temperature:** Shows the current temperature in Celsius (°C).
* **City Name Display:** Clearly indicates the name of the city for which the weather is being displayed.
* **Humidity Information:** Presents the current humidity level as a percentage (%).
* **Wind Speed Display:** Shows the current wind speed in kilometers per hour (km/h).
* **Dynamic Weather Icons:** Displays an icon that visually represents the current weather conditions (e.g., clouds, clear sky, rain).
* **Basic Error Handling:** Provides a user-friendly error message if the entered city is not found or if there's a problem fetching the weather data.
* **Default City on Load:** Upon initial loading, the application displays the weather information for New Delhi.

## Technologies Used
* **HTML:** Provides the structural foundation and elements of the web page, including the search input, button, and display areas for weather information.
* **CSS:** Styles the visual appearance of the application, including the layout, colors, fonts, and responsiveness.
* **JavaScript:** Handles the dynamic functionality of the application, including:
    * Listening for user input and button clicks.
    * Making asynchronous API requests to the OpenWeatherMap API.
    * Processing the received weather data in JSON format.
    * Dynamically updating the HTML elements to display the weather information and icons.
    * Implementing basic error handling for API requests.
* **OpenWeatherMap API:** A third-party web service that provides weather data based on city names.

## File Structure
Weather-App/

├── index.html     (The main HTML file containing the structure)

├── style.css      (The CSS stylesheet for all visual styling)

└── script.js      (The JavaScript file containing the application logic)

└── images/        (Directory containing image assets)

└── package-lock.json (Dependency management file - may or may not be present if no npm packages were explicitly installed)

## Contributing
Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request.
