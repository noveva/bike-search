# Bike Search

This app revolves around bikes that users submitted via `https://bikeindex.org/`.

It has only two views.

First view lets you see a list of bikes. :bike: :bike: :bike: You can search the list, to do so use the search bar in the top right corner above the list.

Second view is the bike details view. :bike: :mag: To get there you have to click on the "See details" button on any bike in the list. Navigating back will keep the list filtered by search term.

## Running the project

1. Run `npm ci` to install all npm packages needed to run the project.
2. Run `npm start` to start the dev server.
3. Navigate to `http://localhost:4200/`.

## Things to improve

Nothing is ever perfect and time is limited. So here we go, a list of things that should/could be improved:
* add the functionality to load more bikes (API allows for pagination if willing to make an extra call or just a simple button at the bottom of the list would suffice)
* on the bike detail page: fix content jump (waiting for image or adding a placeholder and fixing img size)
* search bar will be scrolled out the viewport if user goes to the bottom of the list (sticky search bar or "jump up" button would fix it)
* search bar could be initially hidden as an icon and expand on click 
* search bar should have an input length validation and show an error message on its violation

And many more tiny details could be polished :nail_care:
