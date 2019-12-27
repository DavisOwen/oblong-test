# Random Cat Generator!

The purpose of this exercise is to build a simple react application that
generates random cat images. To do this you will need to complete the following:

## Server:

- Build a server in any language or framework of your choosing that serves
  the client app in the client directory
- Create a `login/` endpoint that authenticates a single default user via
  session cookie. The username and password for the default user should be
  hidden and configurable at server start
- Create a `logout` endpoint that logs a user out of the application
- Create an authenticated `cat/` endpoint that returns a single cat image url.
  You'll need to use the [CatApi](https://docs.thecatapi.com) for this, and your
  api key should be hidden and configurable at server start
- Document how to start your server (including how to set the default user and
  api key), and where to navigate to view the client in the browser. Feel free
  to include a script to start your server if you want

## Client:

In `client/src/js/Login.jsx`

- Build a login form component that requests authentication from the server

In `client/src/js/WithCatRefresh.jsx` add the necessary code to create a higher
order component that accomplishes the following

- When component mounts, it should automatically request a new cat image url
  from the server.
- The url of the current cat image should be passed down to the component being
  wrapped.
- Render a refresh button below the component we are wrapping that fetches a new
  cat image on click.

In `client/src/js/RandomCat.jsx`

- Create a "RandomCat" component using only CatImage and WithCatRefresh
  that renders an image of a cat with a refresh button

In `client/src/js/App.jsx` create an "App" component that renders the Login component when the user is unauthenticated and the RandomCat component when the
user is authenticated.

## Building the Client

```bash
# from the client directory run
npm install
npm run build
```

Build files will be located in `client/dist`
