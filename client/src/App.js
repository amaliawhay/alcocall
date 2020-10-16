//Import dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

//Import components
import store from "./app/store";
import Navbar1 from "./component/navBar/navBar";
import signIn from "./pages/signIn/index";
import Register from "./component/auth/register";
import Login from "./component/auth/login";
import home from "./pages/home/index";
import references from "./pages/references/index";
import Recipes from "./pages/recipes/index";
import bars from "./pages/bars/index";
import breweries from "./pages/breweries/index";
import Footer from "./component/footer/footer";

function App() {
  return (
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

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
