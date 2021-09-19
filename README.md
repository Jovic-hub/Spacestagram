# Spacestagram

All the topics in this README:
* Development
  * Fetch data from NASA’s API
  * Responsive Design
  * Logic and Details
  * Testing with Jest
* Conclusion and Learning Outcomes

## Development

### Fetch data from NASA’s APIs
To fetch data from Nasa's API, I am using Axios that is a promise-based HTTP client that facilitates to use API, basically works doing HTTP requests to fetch data, so we can display all in the information on the screen.
![image](https://user-images.githubusercontent.com/53789339/133918007-74d99b1b-6aa8-4e57-b163-ee5fa56b67eb.png)
<br><br>The NASA_KEY is coming from a .env file, and the params are:<br>
<b>thumbs:</b> If the content type is a video from youtube, we can get just the Thumbnail url.<br>
start_date: Today date -10 days converted to YYYY-MM-DD<br>
end_date: Today date converted to YYYY-MM-DD.<br>
After getting the data from a specific range, we need to revert the order of the result, for the user see the most recent posts first.<br>
![image](https://user-images.githubusercontent.com/53789339/133918157-6d0dce65-9cc8-4411-ac99-1d02213ef954.png)
<br><br>
After this, we should be able do the API pagination, to get a limited amount of data from the API, this is important for some reasons:<br>
- Don't over request data from the API<br>
- Don't force the user wait too much for all the requests<br>
- Infinite scroll possibility.
<br><br>
For the <b>Infinite scroll</b>, I am using a open-source library for ReactJS called InfiniteScroll.<br>
![image](https://user-images.githubusercontent.com/53789339/133918332-ec925cc1-5a73-4789-a9e2-d74ea0a21c5e.png)
<br>Data.lenght will be updated everytime that we do a new request, ManipulatePosts is doing more requests based onde the last start_date request.<br><br>



### Responsive Design
### Logic and Details
### Testing with Jest

## Conclusion and Learning Outcomes
