import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Wrapper>
        {/* <Switch> */}
          <Route exact path="/" component={Saved} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
          <Route component={NoMatch} />
        {/* </Switch> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
