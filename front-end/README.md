## How to run the project locally :


### Clone the projet:

In order to install the project locally, please, fork the repository:

```
https://github.com/eden1207/sportsee
```

Then,

```
git clone https://github.com/eden1207/sportsee.git
```

### Go to the project directory :

For the back-end part, all details are given in the READ.ME of the Back-end folder but usually, when all dependencies are installed, go to the back-end folder,

```
cd back-end
```

### Run the API :

and run the API,

```
npm start
```

### Access to the front-end part :

When you are in the project folder, please, go the the front-end folder,

```
cd front-end
```

### The .env file :

There is in the front-end folder a .env file. This is in order to enter the number of
the port of the back-end. In this project, the back-end can be read on the port 3000. Consequently,
the environment constant is:

```
REACT_APP_PORT='http://localhost:3000'
```

If you need to work on another port, please, change here the port number.


### Run the project :

Then, run the project by using the following command,

```
npm start
```

### Go to a user profile :

When the project is loaded, an empty page should be open.

In order to get a user profile, here Karl profile and Cecile profile, with a respective id 12 and 18, you should write the id in the url adress.

For example, if you are using the following port: http://localhost:3001/ and you want to see a specific profile, you must write http://localhost:3001/users/userID.

Here, if you want to see Karl's profile (userID: 12), you need to write:

```
http://localhost:3001/users/12
```