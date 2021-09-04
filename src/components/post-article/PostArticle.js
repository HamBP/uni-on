import "./PostArticle.css";
import {Link} from "react-router-dom";
import axios from "axios";
import network from "../../global/network";

function PostArticle(props) {
  const postArticle = () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    axios.post(network.baseURL + "articles", formData);
    props.history.push("/");
  }

  return (
    <div className="post-article">
      <div className="header">
        <Link to="/" className="undo"/>
        <button className="submit" onClick={postArticle}>등록</button>
      </div>
      <div>
        <input id="title" type="text" className="title" placeholder="제목"/>
        <textarea name="" id="content" cols="30" rows="10" className="content" placeholder="내용을 입력해주세요."/>
      </div>
    </div>
  );
}

export default PostArticle;