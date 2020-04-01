import React, { Component } from "react";
// import { Query } from "react-apollo";
// import { GET_NOTES } from "../../queries";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Notes} />
          <Route path={"/add"} component={Add} />
          <Route path={"/note/:id"} component={Note} />
          <Route path={"/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
      // <Query query={GET_NOTES}>{() => null}</Query>
    );
  }
}

export default App;
