import "./Board.css";
import Header from "../header/Header";
import {Link} from "react-router-dom";
import axios from "axios";
import network from "../../global/network";
import {useEffect} from "react";

function Board(props) {
  useEffect(() => {
    renderArticleList();
  }, [])

  const renderArticleList = async () => {
    const articles = (await getArticleList()).data;
    console.log(articles);
    articles.forEach(it => {
      setArticle(it);
    });
  }

  const getArticleList = () => {
    return axios.get(network.baseURL + "articles");
  }

  const setArticle = (article) => {
    const whereToInsert = document.getElementById("articles");

    const li = document.createElement("li");
    li.className = "article";
    li.onclick = () => { props.history.push({
      pathname: "/read",
      state: {articleId: article.id}
    }); };

    const p1 = document.createElement("p");
    p1.innerText = article.title;
    p1.className = "article-title"

    const p2 = document.createElement("p");
    p2.innerText = `${article.user} 2021.09.?? 조회 -`;
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
            <span className="search"/>
            <Link to="/post" className="create">글쓰기</Link>
          </div>
        </div>
        <div className="box-padding">
          <div className="box">
            <ul id="articles">
              <li className="article">
                <p className="article-title">테스트 1</p>
                <p className="article-info">익명 2021.09.03. 조회 0</p>
              </li>
              <li className="article">
                <p className="article-title">테스트 2</p>
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