import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Board from "./board/Board";
import PostArticle from "./post-article/PostArticle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Board}/>
        <Route exact path="/post" component={PostArticle}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
