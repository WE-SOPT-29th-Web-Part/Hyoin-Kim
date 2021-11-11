import {react,useState} from 'react';
import {note} from './assets/index';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .body{
        margin:0;
        height : 100vh;
        display: flex;
        flex-direction: column;
    }
    .header{
        margin: 0;
        height:50px;
        font-size : 32px;
        background-color: #FFBF00;
        color: white;
    }

    .header__logo{
        font-size:32px;
        text-align: center;
        height: 50px;
        line-height:50px;
        margin: 0;
    }

    .h1{
        margin: 0;
    }

    li {
        list-style: none;
    }

    .options{
        text-align: center;
        margin : 10px 10px 10px 10px;
    }

    .options__btn{
        height: 35px;
        text-align: center;
        background-color: #F7D358;
        border: 0;
        color : black;
        cursor: pointer;
        border-radius: 30px;
    }

    .todos{
        background-color: whitesmoke;
        display: flex;
        flex-grow:1;
    }

    .todos__today,
    .todos__tomorrow{
        width: 100%;
    }

    .todos__today,
    .todos__tomorrow{
        border-right: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .todos__tomorrow{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .todos__items {
        flex-grow:1;
        width: 100%;
        padding: 0 20px;
    }

    .todos__item {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        border-bottom: 1px solid black;
    }

    .todos__name{
        height:36px;
        line-height:36px;
    }

    .todos__input{
        width:100%;
        height: 30px;
        border: 0 ;
        outline: 0;
    }

    .ul {
        margin:0px;
        padding:0px;
    }

    .button{
        cursor:pointer;
    }
    .footer{
        color:white;
        background-color: #FFBF00;
        height:50px;
        line-height:50px;
        text-align: center;
    }

    .delete__img{
        width: 25px;
        height: 25px;
        margin-top: 5px;
    }

    .delete__button,
    .add__button{
        border:none;
        cursor: pointer;
        background-color:transparent;
    }

    .add__img{
        width: 25px;
        height: 25px;
        margin-top: 5px;
    }

`;

function App() {

    const [todayMemo,setTodayMemo] = useState("");
    const [tomMemo,setTomMemo] = useState("");
    const [todayList,setTodayList] = useState([]);
    const [tomList,setTomList] = useState([]);
    const [onlyToday,setOnlyToday] = useState(true);
    const [onlyTom,setOnlyTom] = useState(true);

    function onChangeToday(e){
        setTodayMemo(e.target.value);
    }

    function onChangeTom(e){
        setTomMemo(e.target.value);
    }

    function deleteTodayMemo(){
        let arrayCopy = [...todayList];
        arrayCopy.shift(todayMemo);
        setTodayList(arrayCopy);
    }

    function deleteTomMemo(){
        let arrayCopy = [...tomList];
        arrayCopy.shift(tomMemo);
        setTodayList(arrayCopy);
    }

    function onClickToday(){
        setOnlyTom(false);
        setOnlyToday(true);
    }

    function onClickTom(){
        setOnlyToday(false);
        setOnlyTom(true);
    }

    function onClickAll(){
        setOnlyToday(true);
        setOnlyTom(true);
    }

  return (
    <Wrapper>
      <header className="header">
          <h1 className="header__logo">To Do List</h1>
      </header>
      <nav className="options">
          <button className="options__btn options__today" onClick={onClickToday}>오늘 할일만 보기</button>
          <button className="options__btn options__tomorrow" onClick={onClickTom}>내일 할일만 보기</button>
          <button className="options__btn options__both"onClick={onClickAll}>모두 보기</button>
      </nav>
      <main className="todos">
          {
              onlyTom===false || onlyToday === true?
                    <section className="todos__today">
                        <h2 className="todos__header">오늘 할 일</h2>
                        <ul className="todos__items" id="memos">
                                {
                                    todayList.map(function(memo,i){
                                        return(
                                            <li className="todos__item">
                                                <span className="todos__name" key={i}> 
                                                    {memo}
                                                </span>
                                                <button className="delete__button" >
                                                    <div className="delete__img" onClick={deleteTodayMemo}>X</div>
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                        </ul>
                        <input className="todos__input" vlaue='' type="text" placeholder="할 일을 메모해보세요!" onChange={onChangeToday}/>
                        <button className="add__button" onClick={()=>{
                                    let arrayCopy = [...todayList];
                                    arrayCopy.unshift(todayMemo);
                                    setTodayList(arrayCopy);
                        }}>
                            <img className="add__img" src={note} alt=""/>
                        </button>
                    </section>
          :
          null
        }

            {
              onlyToday === false || onlyTom ===true?
                <section className="todos__tomorrow">
                    <h2>내일 할 일</h2>
                    <ul className="todos__items" id="memos2">
                    {
                                tomList.map(function(memo,i){
                                    return(
                                        <li className="todos__item">
                                            <span className="todos__name" key={i}> 
                                                {memo}
                                            </span>
                                            <button className="delete__button" >
                                                <div className="delete__img" onClick={deleteTomMemo}>X</div>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                    </ul>
                    <input className="todos__input" id="todos__input2" type="text" placeholder="할 일을 메모해보세요!" onChange={onChangeTom} />
                    <button className="add__button" onClick={()=>{
                                let arrayCopy = [...tomList];
                                arrayCopy.unshift(tomMemo);
                                setTomList(arrayCopy);
                    }}>
                    <img className="add__img" src={note} alt=""/>
                    </button>
                </section>
                :
                null
        }
      </main>
      <footer className="footer">SOPT 29th WEB Part - Kim Hyo-in</footer>
    </Wrapper>
  );
}

export default App;
