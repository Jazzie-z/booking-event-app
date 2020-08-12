import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import EventListing from './component/page/EventListing';
import EventBooking from './component/page/EventBooking';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/booking/:id" exact>
          <EventBooking />
        </Route>
        <Route path="*" exact>
          <EventListing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
