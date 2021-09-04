import "./ReadArticle.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import network from "../../global/network";

function ReadArticle(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    axios.get(network.baseURL + `articles/${props.location.state.articleId}`)
      .then(res => {
        console.log(res);
        setTitle(res.data.title);
        setContent(res.data.content);
      })
  }

  return (
    <div className="read-article">
      <div className="header">
        <Link to="/" className="undo"/>
      </div>
      <div>
        <h1 className="title" onClick={getArticle}>{title}</h1>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default ReadArticle;