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
<br>The NASA_KEY is coming from a .env file, and the params are:<br>
<b>thumbs:</b> If the content type is a video from youtube, we can get just the Thumbnail url.<br>
start_date: Today date -10 days converted to YYYY-MM-DD<br>
end_date: Today date converted to YYYY-MM-DD.<br>
After getting the data from a specific range, we need to revert the order of the result, for the user see the most recent posts first.<br>
![image](https://user-images.githubusercontent.com/53789339/133918157-6d0dce65-9cc8-4411-ac99-1d02213ef954.png)

### Responsive Design
### Logic and Details
### Testing with Jest

## Conclusion and Learning Outcomes
