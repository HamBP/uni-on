import "./Board.css";
import Header from "../header/Header";

function Board() {
  return (
    <div className="board">
      <Header/>
      <div className="container">
        <span className="banner">원래 이미지 들어가야 됨</span>
        <div className="header">
          <h3>Noto Sans KR</h3>
          <a href="#">글쓰기</a>
        </div>
        <div className="box">
          <table>
            <tr>
              <th>ID</th>
              <th colSpan="7">제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="7">로렘입숨</td>
              <td>익명</td>
              <td>2021.09.03.</td>
              <td>0</td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan="7">로렘입숨</td>
              <td>익명</td>
              <td>2021.09.03.</td>
              <td>0</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Board;