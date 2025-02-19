## Week 1 Assignment: Flixster

Submitted by: Emily Sturman

Estimated time spent: 10 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://creampelt.github.io/flixter/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

![Walkthrough video demo](https://media.giphy.com/media/qfzmpKCXHyUPLki8SZ/giphy.gif)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt prepared to complete the assignment. Personally, it helped that I have previous web-dev experience, so I was able to get started on some of the more complicated features earlier.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I think I probably would've tried to add some sort of search filtering feature (for things like languages, release date, etc.). I did try to implement this, but the search API was fairly limited, so it would have required manually filtering results (which I didn't have time to implement effectively).

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

My project demo went pretty well :smiley:

### Open-source libraries used

[Font Awesome](https://fontawesome.com/) for icons

### Shout out

Shout out to Adiel for helping me spot a couple of bugs :smiley:
