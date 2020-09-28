import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/navBar/navBar";
import home from "./pages/home/index";
import signIn from "./pages/signIn/index";
import recipes from "./pages/recipes/index";
import bars from "./pages/bars/index";
import breweries from "./pages/breweries/index";
import Footer from "./component/footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={signIn} />
        <Route exact path="/index" component={home} />
        <Route exact path="/bars" component={bars} />
        <Route path="/breweries" component={breweries} />
        <Route path="/recipes" component={recipes} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
