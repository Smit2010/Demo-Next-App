import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Review from "../../pages/Review";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Review />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;