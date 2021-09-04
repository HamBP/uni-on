import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Board from "./board/Board";
import PostArticle from "./post-article/PostArticle";
import ReadArticle from "./read-article/ReadArticle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Board}/>
        <Route path="/post" component={PostArticle}/>
        <Route path="/read" component={ReadArticle}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
