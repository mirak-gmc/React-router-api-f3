import React from "react";
import AppNavBar from "./components/AppNavBar";
import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavBar />

      <Switch>
        <Route exact path="/">
          <UsersList />
        </Route>
        <Route
          path="/profile/:userId"
          component={UserProfile}
          // render={(props) => <UserProfile      {...props} />}
        />

        <Route path="*">
          <h1>Not Found !!! :'(</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
