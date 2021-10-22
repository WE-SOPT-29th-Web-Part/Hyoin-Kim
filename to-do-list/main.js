// 로컬 저장소에 노트 추가
function addTodayMemo(){
    document.querySelector('#todos__input').addEventListener('keypress', function (e) { //enter클릭시 
      if (e.key === 'Enter') {
        let addTxt = document.getElementById("todos__input");
        
          if (addTxt.value == "") {
              return alert("해당 게시물에 글을 추가하세요.");
          }
      
        let memos = localStorage.getItem("memos");
        if (memos == null) {
          memosObj = []; //null인 경우 유효하지 않음
        } else {
          memosObj = JSON.parse(memos); 
        }
    
        let myObj = {
          text: addTxt.value
        } //json에 키 값과 value
        memosObj.push(myObj);
        localStorage.setItem("memos", JSON.stringify(memosObj)); //문자열로 변환해야하는 로컬 저장소
        showTodayMemos();
        addTxt.value=null; //input초기화
      }
    });
}

//노트 보여주는 함수
function showTodayMemos() {
    let memos = localStorage.getItem("memos");
    if (memos == null) {
      memosObj = [];
    } else {
      memosObj = JSON.parse(memos);
    } 
    //로컬 저장소에 저장된 값 보여줌
    let newMemo = "";
    memosObj.forEach(function(element, index) { //노트가 추가될때마다 foreach문으로 추가
      newMemo += `
            <li class="todos__item">
                <span class="todos__name">${element.text}</span>
                <button class="delete__button"  id="${index}" onclick="deleteMemo(this.id);" >
                    <img class="delete__img" src="assets/delete.png" alt=""/>
                </button>
            </li>
              `;
    });
    //빈 값일 경우
    let memosElm = document.getElementById("memos");
    if (memosObj.length != 0) {
      memosElm.innerHTML = newMemo;
    } else {
      memosElm.innerHTML = `노트가 비워있습니다. 작성하여 채워보세요!`;
    }
}

function deleteMemo(index) {
    let confirmDel = confirm("해당 메모를 삭제하시겠습니까?");
    if (confirmDel == true) {
        let memos = localStorage.getItem("memos");
        if (memos == null) {
            memosObj = [];
        } else {
            memosObj = JSON.parse(memos);
        }

        memosObj.splice(index, 1);
        localStorage.setItem("memos", JSON.stringify(memosObj));
        showTodayMemos();
    }
}
