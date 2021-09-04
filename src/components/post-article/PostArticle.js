import "./PostArticle.css";
import {Link} from "react-router-dom";
import axios from "axios";
import network from "../../global/network";

function PostArticle() {
  const postArticle = () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    axios.post(network.baseURL + "articles", formData)
      .then(res => {
        console.log("요청");
      })
  }

  return (
    <div className="post-article">
      <div className="header">
        <Link to="/" className="undo"/>
        <button className="submit" onClick={postArticle}>등록</button>
      </div>
      <div className="box">
        <input id="title" type="text" className="title"/>
        <textarea name="" id="content" cols="30" rows="10" className="content"/>
      </div>
    </div>
  );
}

export default PostArticle;