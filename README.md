# Spacestagram

All the topics in this README:
* Development
  * Fetch data from NASA’s API
  * Responsive Design
  * Logic and Details
  * Testing with Jest
* Conclusion and Learning Outcomes

# Development

## Fetch data from NASA’s APIs
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
-Don't over request data from the API;<br>
-Don't force the user wait too much for all the requests;<br>
-Infinite scroll possibility.
<br><br>
For the <b>Infinite scroll</b>, I am using a open-source library for ReactJS called InfiniteScroll.<br>
![image](https://user-images.githubusercontent.com/53789339/133918332-ec925cc1-5a73-4789-a9e2-d74ea0a21c5e.png)
<br>Data.lenght will be updated everytime that we do a new request, ManipulatePosts is doing more requests based onde the last start_date request.<br><br>

## Responsive Design
The spacestagram is completely responsive, designed first in the mobile version, than transferred to the desktop size screen.<br>
![image](https://user-images.githubusercontent.com/53789339/133974325-3435dfa1-2d04-47b5-8dd8-79976f68997b.png)
![image](https://user-images.githubusercontent.com/53789339/133974407-94b5e2a1-0675-4103-95dd-a45f9258099c.png)
<br><br>

## Logic and Details
I will explain how I had the solution for some functions:<br>
### Like button
The like button is developed using a Heart of just css and that is saved in the local storage when the user clicks in a Heart(Like), and every time that the application is used the code will check and list all the liked posts by their date that is unique in this API.<br>
![image](https://user-images.githubusercontent.com/53789339/133974694-561b11cd-a3d4-4db9-bb0d-151a0b385565.png)
![image](https://user-images.githubusercontent.com/53789339/133974733-76942856-118a-4341-aace-ecbb86d12338.png)
<br><br>
### Loading
Loading is created by using the useState functionalitty of React, where we can change the state from true to false. So after the user is completely fetched we can change the state of loading to false and then the screen will change.
![image](https://user-images.githubusercontent.com/53789339/133975096-215d17e5-0775-4827-8a05-984ec2a1994a.png)<br>
![image](https://user-images.githubusercontent.com/53789339/133975119-2fcb4eae-7ce0-4690-8492-a1b5cee6dc2b.png)<br>
![image](https://user-images.githubusercontent.com/53789339/133975268-f595590c-2d3a-4914-a91e-10aab1b077c6.png)<br>
The loading in the "timeline" is completely done using the InfiniteScroll library.<br>
![image](https://user-images.githubusercontent.com/53789339/133975188-5aa64544-3a68-418a-894f-f4c1b3e6f3df.png)
<br><br>

## Testing with Jest
To make sure that everything is working properly in my application, I am doing Unit Tests using the javascript framework Jest, that make me able to test my functions and mainly the API requests and responses, and to make sure that my code is working fine.
Here is an example: The nasa API has a object called "status" that checks if the user is not using a wrong parameter or key, if the status is equal 200 everything is working fine, if 403 the request has a problem.<br>
![image](https://user-images.githubusercontent.com/53789339/133975986-1e17e2a4-830b-4d02-a93b-87ba03f31480.png)<br>
![image](https://user-images.githubusercontent.com/53789339/133976006-19caee6b-4fcb-4f7d-b54f-3c13b0bb2652.png)

# Conclusion and Learning Outcomes
I had a lot of learning outcomes in this project, I developed more my skills with ReactJS, I increased my knowledge on how to handle API and how to fetch and API and use this data to render something on the screen, increased my knowledge of modular programming and had the opportunity to do Unit Tests mainly in the API to make sure that everything is working properly and have a more consized code.<br>
In general, this project was great for me, I learned things, I developed more skills and was really fun to do it.
