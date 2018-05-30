# Front-end Test Spec

## User Story
As a user, I would like to find relevant information about movies. Therefore, I expect a form, that helps me to search for a movie and provides relevant information in a result list.

Sometimes I search for a movie, but I do not know the correct name and only remember some parts of the title or the author etc.


## Requirements
- You use public movie API
- You decide which information to show in the result list
- There should be a page showing all the details for a specific movie (should be shown when the user clicks on a movie in the list)
- You **use react** and any other library of your choice that best fits the needs for these requirements
- You decide  the look and appearance
- You hand over a component (dependency) diagram
- You can start whenever you like and send us the result once you are done. You bring the 'project' to a production standard (not more, not less). Do not spend more than 6 hours on this exercise.

*(Optional: users want to be excited; which features, that go beyond the original scope of the challenge, can you imagine?
If possible, pick 1 or 2 of them and implement it as well)*

## Public Movie API 
Our api provides an endpoint to list the movies by query:

**GET https://sbot-fe-test.herokuapp.com/api/v1/movies?query=whatever**

```javascript
{
    "vote_count": 524,
    "id": 19265,
    "video": false,
    "vote_average": 6.9,
    "title": "Whatever Works",
    "popularity": 10.371405,
    "poster_path": "/mGL6OgyBsrcoB4lnJNYvyqHrUY
    a.jpg ","
    original_language ":"
    en ","
    original_title ":"
    Whatever Works ","
    genre_ids ":[35,10749],"
    backdrop_path ":" / 3 VgYTo2223LeXAQvUW8ZLc8niRY.jpg ","
    adult ":fals
    e,
    "overview": "Whatever Works explores the relationship between a crotchety misanthrope, Boris and a nave, impressionable young runaway from the south, M
    elody.When Melody 's uptight parents arrive in New York to rescue her, they are quickly drawn into wildly unexpected romantic entanglements. Everyone di
    scovers that finding love is just a combination of lucky chance and appreciating the value of \"whatever works.\"",
    "release_date": "2009-06-19",
    "full_pos
    ter_path ":"
    https: //image.tmdb.org/t/p/w500//mGL6OgyBsrcoB4lnJNYvyqHrUYa.jpg","full_backdrop_path":"https://image.tmdb.org/t/p/w500//3VgYTo2223LeXAQvUW8Z
        Lc8niRY.jpg ","
    listening_token ":"
    1 f6e85e6 - b2cc - 4913 - baab - db5f16bcf1c5 "}

```


## Result
- Fork the project
- Implement your solution
- Open a Pull-Request to our Repository

*Any question just open an issue for us*
