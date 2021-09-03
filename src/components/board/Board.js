import "./Board.css";
import Header from "../header/Header";
import {Link} from "react-router-dom";

function Board() {
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
            <ul>
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