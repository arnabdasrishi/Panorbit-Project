## Languages and Dependencies

![1](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![2](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![3](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![4](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![5](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


# Panorbit Dashboard Prototype
[(CLICK HERE) DEPLOYED -> Netlify URL ](https://panorbit-protoptye-ads.netlify.app/)

This is a prototype of a simple yet elegant design of users-list landing page and then a user dashborad which consist of all the details of the particular user. This is a project work for Panorbit and still in development phase.

## Running the Appliction

This app was made with the help of React/npm CRA (create React application)
- Clone this repo or download the zip and extract the file or fork it.
- After clonning run the following commands on your zsh or node
    - To install all the dependencies run : ` npm install` or `npm i`
    - Post that run `npm start` or `npm run start`
    - or directly you can visit the deployed netlify site `https://panorbit-protoptye-ads.netlify.app/`

## Tech Stack

**Frontend:** HTML, CSS, React.js, APIs, JSON

**Server:** API endpoint is already hoisted. You can check the fetch function inside the code to get the api/apis links.

Data are not saved in Local Storage.


## Author

- [Arnab Das](https://github.com/arnabdasrishi)


## API Reference

#### Get all items

The API Auth Mocker is commented out in (assorted-desk-4504/script/signup_login.js)

To use the system just remove the comments. 

Remember there are some limitations.

```http
  POST URL- https://panorbit.in/api/users.json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Not Required** |

#### Get item Format

```http
  //Sample Data format.
  //You can expect this format of data when you pass a get request from the server
  
   "users": [
            {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
                }
            }
          ]
```

## CSS and UI

No external libraries and used to make this project till now. However further more it may be used for improve the user interface.

All the class names and id used in this projects are in BEM convention.

Information about the functions and its uses including JSX elements information are provided in the codebase itself to get a clearer understanding

Responsiveness work is in progress. For now at the alpha release stage it is not responsive.

# Feedback

If you have any feedback, please reach out to arnabdasrishi@gmail.com

### 🙂 Thank You and have a nice day 🙏



