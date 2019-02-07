// 格納用の連想配列
let data={
  task:[], 
  done:[]
};

// とりあえずここにアイコンを用意します//
// もともと表示されていないものなのでjsで作成する
let removeIcon='<i class="fas fa-trash-alt fa-lg"></i>';
let doneIcon='<i class="fas fa-check-circle fa-lg"></i>';

// ボタンをした時の操作
document.getElementById('add').addEventListener('click', function(){
  let value=document.getElementById('task').value;
  // console.log('task');
  addTask(value);
  // console.log(data.task)
});


// 上に入れる関数を作ります
function addTask(value){
  data.task.push(value)//変数の配列に新しい要素を追加する
}





// ここからローカルストレージのデータをアップデートする為のコード

function dataObjectUpdated(){
  localStorage.setItem('todoList',JSON.stringify(data));
  // console.log(localStorage);
}

// ローカルストレージの内容を表示させる為のCode
function renderTodolist(){
  for(let value of data.task){
    addTaskTODOM(value);
  }

for(let value of data.task){
  addTaskTODOM(value,true);
  }
}


//for 変数 of 配列
// 「配列」の値を1つずつ「変数」へ代入してくれる
// オブジェクトには使用できない



// let year = dt.getFullYear();
// let month = dt.getMonth()+1;
// let date = dt.getDate();
// document.body.appendChild(year).appendChild(month).appendChild(date);

//getElementeById
let date=new Date(); //PCの日付から取っている
let hoge=document.getElementById('hoge');
hoge.textContent=date.toLocaleString();
//上の引数に入れることで表示を変えることができる














