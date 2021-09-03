import "./Board.css";
import Header from "../header/Header";
import {Link} from "react-router-dom";
import axios from "axios";
import network from "../../global/network";

function Board() {
  const getArticleList = () => {
    axios.get(network.baseURL + "articles")
      .then(res => {
        console.log(res);
      })
  }

  const setArticle = () => {
    const whereToInsert = document.getElementById("articles");

    const li = document.createElement("li");
    li.className = "article";

    const p1 = document.createElement("p");
    p1.innerText = "test";
    p1.className = "article-title"

    const p2 = document.createElement("p");
    p2.innerText = "t e s t";
    p2.className = "article-info"

    li.append(p1);
    li.append(p2);

    whereToInsert.insertBefore(li, whereToInsert.firstChild);
  }

  return (
    <div className="board">
      <Header/>
      <div className="container">
        <span className="banner"/>
        <div className="header">
          <h3>Noto Sans KR</h3>
          <div className="menu">
            <span className="search" onClick={getArticleList}/>
            <Link to="/post" className="create">글쓰기</Link>
          </div>
        </div>
        <div className="box-padding">
          <div className="box">
            <ul id="articles">
              <li className="article">
                <p className="article-title">로렘입숨1</p>
                <p className="article-info">익명 2021.09.03. 조회 0</p>
              </li>
              <li className="article">
                <p className="article-title">로렘입숨2</p>
                <p className="article-info">익명 2021.09.03. 조회 0</p>
              </li>
              <li className="article">
                <p className="article-title">로렘입숨3</p>
                <p className="article-info">익명 2021.09.03. 조회 0</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;