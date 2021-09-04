import "./ReadArticle.css"
import {Link} from "react-router-dom";
import {useState} from "react";

function ReadArticle() {
  const [title, setTitle] = useState("1");
  const [content, setContent] = useState("2");

  return (
    <div className="read-article">
      <div className="header">
        <Link to="/" className="undo"/>
      </div>
      <div>
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default ReadArticle;