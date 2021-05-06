# System Implementation

## Table of contents

[TOC]

## Stack Architecture

Our team decided to use MEAN stack for developing this project, each character stands for:

- MongoDB - document database
- Express - Node.js web framework
- React - a client-side JavaScript framework
- Node - the premier JavaScript web server

The reasons we choose MEAN are as below:

Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called BSON), and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.

MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications,MongoDB Atlas makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.

Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a frontend JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server.

The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!

MERN is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.

Here is an article( [link](https://github.com/STF1998/Desk20/blob/main/report/systemImplementation.md)) about Which Framework to Choose and they did a great study on that. Below is the popularity of three main frameworks over the past 12 months.

<img src="C:\Users\痞老板的邪恶计划\Desktop\Image\Popularity.png" style="zoom:60%;" />

Each of these frameworks has its own benefits and drawbacks, it's really hard to choose the best. However, as React is quite popular in our homeland, we decided to adopt MEAN as our stack architecture.

## Back End

This is an E-R diagram showing the relation between different data.

<img src="C:\Users\痞老板的邪恶计划\Desktop\Image\Qin.png" style="zoom:75%;" />

Based on the diagram, the database’s structure in MongoDB is designed like below.

<img src="C:\Users\痞老板的邪恶计划\Desktop\Image\Qin2.png" alt="Qin2" style="zoom:100%;" />

In terms of connection of MongoDB, we choose Mongoose to do the work. It is based on MongoDB and provides Schema, Model and Document objects, which is more convenient than using MongoDB module directly. Schema enables us to define the structure of documents. Persistent storage of data in MongoDB can be implemented by ‘save’ method. When data needs to be queried, for example, display of daily plan, method ‘find’ will conduct it. 
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        default: 'Male'
        required: true
    },
    ......
})
```
## Middle Tier

We used Nodejs and the express framework to build the middle tier. Here are all the modules used in the middle tier, with express as one of the modules to help us call external API. Most of the statements that follow are initializing  and setting the module.

```js
//app.js
const path = require('path');
const app = express();
const router = require('./router')
var bodyParser = require('body-parser');
var session = require('express-session');
const http = require('http');

app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
```

The last and most important step is to define and listen to the port. The http and express modules of nodejs already integrate this method for us, so we can use it directly. Here we will use port 5000 as the port to run on, i.e. http://localhost:5000/
```js
http.createServer(app).listen(5000,'0.0.0.0',function(){
    console.log('running...');
})
```
The front-end page makes get and post requests, and with Nodejs it needs to accept the requests and process them and return them to the client. For get requests, we only need to return the rendered HTML interface; for post requests, different pages have different processing for post requests. The registration request is to receive data from the client and interact with the database; the recommendation plan request is to determine the user's login status and read the user informationfrom the database, then to return to the client. Like below:
```html
<form action="/login" method="post" style="
    height: 290px;
    width:300px;
    padding:10px;
    background-color:rgb(240, 240, 240);
    border-radius: 12px;
    margin:auto;
    font-size: 24px; 
    font-weight: bold;">
    <div class="form-group" style=" 
        width:200px;
        padding:18px;
        margin: auto">
        <div class="form-name left">
            <label>Email</label>
        </div>
        <input type="email" name="email" value="{{ form && form.email }}" class="form-input left" style="height: 24px; width: 200px;"/>
    </div>
    .....
</form>
```
The requested action of the web page is sent via the **action="/login" method="post"** in html, the the request is read and processed on the back end by the get or post function of express module.
```js
//router.js
const router = express.Router();
router.get('/login',function(req,res) {
    res.render('index.html');
});
router.post('/login',function(req,res){
    var body = req.body;
    User.findOne({
        email: body.email,
        password: body.password
    }, function(err,user){
        if(err){
            return res.render('index.html',{
                err_message:'Server Error.',
                form: body
            })
        }
        if(!user){
            return res.render('index.html',{
                err_message:'Email or Password is invalid.',
                form: body
            })
        }
        req.session.isLogin = true;
        req.session.user=user;

        return res.render('logined.html',{
            err_message:'OK~',
            form: body
        })
    })
})
```

## Front End

### Why React?

The JavaScript ecosystem is very dynamic. New tools and libraries pop up regularly, each one a little different from the rest, and the user has a wide selection to pick from. Frameworks are no exception.

React has already hit the point of being mainstream and is used by a number of large companies including, of course, Facebook, but also Netflix, AirBNB, DropBox, IMDb, PayPal, Tesla Motors, Walmart and many others. Pretty good company to keep! There is a robust ecosystem to support it with tools, support, and experienced developers. And, of course, there is its Facebook parentage.

How do you compare React with other frameworks? They are not interchangeable and each one has pros and cons depending on what you are trying to achieve. Why pick one over the other? I’ll present five reasons why we choose React for this project.

- ##### Easy to Learn, Easy to Use

React is easy to learn and easy to use and comes with a good supply of documentation, tutorials and training resources. Anyone who comes from a JavaScript background can understand and start using React in a few days. This makes all the great things it does even greater because you can actually use them in short order.

- ##### Reusable Components

Components are wonderful and React is based on them. You start with small things, which you use to build bigger things, which you use to build apps. Each component has its own logic and controls its own rendering, and can be reused wherever you need them. Code re-use helps make your apps easier to develop and easier to maintain. They also help you implement a consistent look and feel across the whole project. This may be a short description, but using components provides a large advantage in your development efforts.

- ##### The Virtual DOM

One of the really cool parts of React is the virtual DOM. Normally, when you develop an app that has a lot of user interaction and data updates, you have to carefully consider how your app structure is going to impact performance. Even with fast client platforms and JavaScript engines, extensive DOM manipulation can be a performance bottle-neck and even result in an annoying user experience. Worse, because the DOM is tree-structured, simple changes at the top level can cause huge ripples to the user interface.

React solves this by using a virtual DOM. This is, as the name implies, a virtual representation of the DOM. Any new view changes are first performed on the virtual DOM, which lives in memory and not on your screen. An efficient algorithm then determines the changes made to the virtual DOM to identify the changes that need to be made to the real DOM. It then determines the most effective way to make these changes and then applies only those changes to the real DOM. This guarantees a minimum update time to the real DOM, providing higher performance and a cleaner user experience all around.

- ##### Great Developer Tools

React is well covered in terms of design and debugging tools. React Developer Tools, available for Chrome and Firefox, is a browser extension for React. It allows you to inspect the React component hierarchies in the virtual DOM. You can select individual components and examine and edit their current properties and state. You can also track the hierarchy of any component and discover both parent and child components. You can find them on Github, in the Chrome store, or the Firefox add-ons page.

- ##### It’s Easier to Write with JSX

JSX is really just a mix of HTML and JavaScript. You don’t have to use it to use React, but you will want to. JSX lets you add bits of HTML to your JavaScript. This lets you come up with much simpler and cleaner code.

 

### Details of Front End Implementation

We had modified the original prototypes and wireframes to design what we envisaged our website would look like. During this part, we had decided that our website would compose of three components:

- Welcome 
- Resource Link
- Create schedule

We don't want our users jump among three different pages, so three components are all included in one page. But in order not to make the web page appear lengthy and chaotic， we use Router Module from React to hide the Resource Link and Add Plan  component until the corresponding button is clicked.

<img src="C:\Users\痞老板的邪恶计划\Desktop\Image\WebOverview.png" style="zoom:30%;" /><img src="C:\Users\痞老板的邪恶计划\Desktop\Image\middlepageOverview.png" alt="middlepageOverview" style="zoom:33%;" /><img src="C:\Users\痞老板的邪恶计划\Desktop\Image\bottomPageOverview.png" alt="bottomPageOverview" style="zoom:33%;" />



##### Welcome Component

This part is quite simple which just includes a title and a button witch will take users to the registration and login interface, where  users information can be sent to the backend. To do this, we use  `window.location` to redirect the browser to the login page.

```jsx
      <button
        className="BUTTON_Join"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/login";
        }}
      >
        Join
      </button>
```



##### Resource Link Component

This component intends to provide basic knowledge of fitness for the users--especially the rookies. Below are the attributes of the users we consider:  Axios with HTTP request method called `POST` to send data  to the end point.

- Not familiar with human muscles;
- Lack of fitness knowledge;
- Interested in indoor exercises;

Therefore, we adopt a more understandable and intuitive way of interaction. In order to achieve interaction, we use **react router**. React Router is the standard routing library for React. React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.  

There two levels router included in the component. The first level, which we have already mentioned, the Resource Link Component is hided till users click the button.  In the second level, users can switch two different pictures and links related to them by clicking the  Front and Back button and users can browse other pages by clicking 8 buttons presented besides the pictures.

```jsx
            <tr>
              <td className="leftNav">
                <Route path="/Front" exact component={Front} />
                <Route path="/BackImage" exact component={BackImage} />
              </td>
              <td className="rightMain">
                <Route path="/Front" exact component={FrontContent} />
                <Route path="/BackImage" exact component={BackContent} />
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/Front">
                  <button className="FrontBtn">Front</button>
                </Link>
                <Link to="/BackImage">
                  <button className="BackBtn">Back</button>
                </Link>
              </td>
```

​                     <img src="C:\Users\痞老板的邪恶计划\Desktop\Image\Front.png" style="zoom:33%;" /><img src="C:\Users\痞老板的邪恶计划\Desktop\Image\back.png" alt="back" style="zoom:33%;" />

#####  Create schedule component

 We divide this component into two parts:

- Part one: Receive the multiple input data(Title,Amount and Date) through a form from users and save them; 

- Part two: we search for the data users request in our database and render it on the website. 

Below is the logic tree of Add Plan component. 

<img src="C:\Users\痞老板的邪恶计划\Desktop\Image\PlanAdd.png" alt="PlanAdd" style="zoom:60%;" />

The right branch represents the part one.

Users can input the data through the Form.js and we can receive data through the onChange **event** in React which detects when the value of an input element changes. Since here we need to handle multiple controlled input elements, we can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name. 

```JSX
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
```

```jsx
        const dateChangeHandler = (event) => {
          setEnteredDate(event.target.value);
        };

        const submitHandler = (event) => {
          event.preventDefault();
          const expenseData = {
             title: enteredTitle,
             amount: enteredAmount,
             date: new Date(enteredDate)
         };
```

Meanwhile, we create many components to make our code structure be clear and not chaotic, so we also need to pass the data among these components.  In a React component, **props** are variables passed to it by its parent component. But props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component **state**. State on the other hand is still variables, but directly initialized and managed by the component.  So we use state as a carrier to complete the transfer task. Than we "lift the state up" to the DataSave.js and save them. 

```jsx
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  props.onSaveData(Data);
```

The left branch represents the part two. Users input the filtered data(Here we choose date as the filtered data ) to search for what they expect by Filter.js and we compare them with the data we save. If they match, we will display them on the website. The reception and transmission of data has been mentioned in the previous documentation, and the key here is data screening. We get the filtered data through the input event and read date from storage. Since the data format obtained from users and storage may be different, we use the function formatDate to convert it into the same format and compare them. 

```jsx
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }  

  const filteredData = props.items.filter((data) => {
    return formatDate(data.date) === formatDate(filteredYear);
  });

```



## Deployment Details

Due to the impact of covid-19, communications between members of this project are conducted online, and the cost of communications is relatively high. In the early stage of the project, we mainly adopted the idea of separating front and back ends, in order to let front-end and back-end developers only do what they are good at, and to minimize communication costs. Therefore, the team members concentrate on their own responsibilities and implement different functions of the project. The front-end uploads the code to CodeSandBox, and the back-end developers can directly compile it in CodeSandBox, or download it for modification. At the same time, the back-end personnel will return the feedback result.

But in sprint2 and sprint3, we found that due to the need for data exchange, we had to face the cross-domain exchange of resources, which undoubtedly increased the communication cost of the team. Therefore, in the middle and late stages of the project, we will hand all the project functions that require data exchange to a team member to avoid cross-domain problems. At this time, we only need to use Location href Property to transfer the user from one client to another server when the user needs to send or request data, so that the data can be exchanged under the same domain name.

```jsx
          <button
            className="BUTTON_Join"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/login";
            }}
          >
```