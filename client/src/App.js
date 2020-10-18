//Import dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

//Import authorization tokens & actions
import setAuthToken from "./utils/setAuthToken";
import {
  setCurrentUser,
  logoutUser,
} from "./app/actions/authActions";

//Import components
import store from "./app/store";
import Navbar1 from "./component/navBar/navBar";
import signIn from "./pages/signIn/index";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import PrivateRoute from "./component/privateRoute/privateRoute";
import Dashboard from "./pages/userProfile/dashboard";
import home from "./pages/home/index";
import references from "./pages/references/index";
<<<<<<< HEAD
// import signIn from "./pages/signIn/index";
=======
>>>>>>> reg/login
import Recipes from "./pages/recipes/index";
import bars from "./pages/bars/index";
import breweries from "./pages/breweries/index";
import Footer from "./component/footer/footer";
import Register from "./auth/register.js";
import Login from "./auth/login.js";

//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token & get user info
  const decoded = jwt_decode(token);
  //set user & isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expire token
  const currentTime = Date.now() / 1000; //milliseconds
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Navbar1 />

        
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/index" component={home} />
        <Route exact path="/bars" component={bars} />
        <Route path="/breweries" component={breweries} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/references" component={references} />

        <Footer />
      </div>
    </Router>
=======
    <Provider store={store}>
      <Router>
        <div>
          <Navbar1 />

          <Route exact path="/" component={signIn} />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/index" component={home} />
          <Route exact path="/bars" component={bars} />
          <Route path="/breweries" component={breweries} />
          <Route path="/recipes" component={Recipes} />
          <Route
            path="/references"
            component={references}
          />
          <Switch>
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
>>>>>>> reg/login
  );
}

export default App;
