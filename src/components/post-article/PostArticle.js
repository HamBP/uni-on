import "./PostArticle.css";
import {Link} from "react-router-dom";

function PostArticle() {
  return (
    <div className="post-article">
      <div className="header">
        <Link to="/" className="undo"/>
        <button className="submit">등록</button>
      </div>
      <div className="box">
        <input type="text" className="title"/>
        <textarea name="" id="" cols="30" rows="10" className="content"/>
      </div>
    </div>
  );
}

export default PostArticle;