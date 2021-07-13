import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar";
import { Context } from "./context/context";
import { Create, HomePage, Login, Register, Settings, Single } from "./pages";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">{user ? <HomePage /> : <Register />}</Route>
        <Route path="/login">{user ? <HomePage /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/create">{user ? <Create /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
