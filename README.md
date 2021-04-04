REACT WEATHER APP

[DEMO LINK](https://olexandrbelyaev.github.io/react-task/)

Implemented functional single-page weather app according to [Design](https://xd.adobe.com/view/0234cb62-06be-4065-9c9f-4b01488a852b-5767/)

Project was created with [Create-react-app](https://create-react-app.dev/)

In app was used:
 - JavaScript (ReactJS)
 - HTML/CSS(Sass)
 - Material-UI
 - BEM
 - ReactHooks
 - ChartsJS

Description

General function of app is fetching data from server, basing on place, where user locate or what city about looking for.
Location of user checks automatically with special locate API, then name of city sends to WeatherAPI. Response of request fetches in browser and fills created visual card with info about name of city, temperature, wind, pressure and humidity.

Additional functional of app are:
 - creating of autocomplete list with found names of the cities;
 - customization of cards with different background colors;
 - customization of cards in dependens of temperature;
 - localization of labels in the weather-cards and elements of header (input placeholder, button name);
 - localization settings, found info about weather in different cities, automplete list saves by app in local storage of browser;

Dependencies:
 - Node v14.0.0
 - NPM v6.14.4
 - Material-UI v4.11.1
 - Sass v.1.32.5
