//格納用の配列
let data;

//アイコンをここに用意します
let removeIcon = '<i class="fas fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle"></i>';

// ローカルストレージをクリアーにする
// localStorage.clear;




// localStorageに保存させるためのコード
// 読み込まれたタイミングでローカルストレージを用意する、もしくは配列を用意する
document.addEventListener('DOMContentLoaded',function(){
    // もしデータがlocalStorageの中に保存されたら
    if(localStorage.getItem('todoList')){
      //data配列にローカルストレージの内容を格納してちょ
      data=JSON.parse(localStorage.getItem('todoList'));
      //データの表示
      renderTodoList();

    }else{
      //data配列にtaskキーとdoneキーを作ってくれよ
      data = {
        task:[],
        done:[]
      };
    }
 localStorage.setItem('todoList',JSON.stringify(data));


  });


//addボタン押した時の挙動
document.getElementById('add').addEventListener('click',function(){
  let value = document.getElementById('task').value;
  //console.log(value);
  addTask(value);
  addTask.remove();
let date=new Date(); //PCの日付から取っている
let hoge=document.getElementById('hoge');
hoge.textContent=date.toLocaleString();
//上の引数に入れることで表示を変えることができる
  
  // console.log(data.task);
});


//-------------------関数-----------------------
//タスクをデータに格納
function addTask(value){
  // console.log(data.task);
  //データ(valueの中身)を配列に格納
  data.task.push(value);
  addTaskToDOM(value);


//ローカルストレージのアップデート
dataObjectUpdated();
}


//画面に登録したいタスクを表示する為の関数
function addTaskToDOM(text, isDone){
  
//doneタスクか、not-yetタスクか、判定させる
  let list;
  if(isDone){
    list = document.getElementById('done');
  }else{
    list = document.getElementById('not-yet');
  }
  
//liタグを作成
  
  //変数taskにliタグを作成して挿入
  let task = document.createElement('li');
  //liタグのテキストに引数textを挿入
  task.textContent = text;
  
  
//divタグ作成
  let buttons = document.createElement('div');
//  buttons.className = 'buttons';
  buttons.classList.add('buttons');

//ボタンを作成(追加)

//削除ボタン
  let remove = document.createElement('button');
  //cssあとから書くよ
  remove.classList.add('remove');
  //HTMLに追加
  remove.innerHTML = removeIcon;
  //押された時の処理
  remove.addEventListener('click',removeTask);
  
  
//完了ボタン
  let done = document.createElement('button');
  //classつける
  done.classList.add('done');
  //htmlに追加
  done.innerHTML = doneIcon;
  done.addEventListener('click', doneTask);

  
  
//DOMの組み立て
  buttons.appendChild(remove);
  buttons.appendChild(done);
  task.appendChild(buttons);
  

//組み立てたDOMを挿入
  list.insertBefore(task, list.childNodes[0]);
  
}


function removeTask(){
  let task = this.parentNode.parentNode;//変数taskにはliが入っている
  let id = task.parentNode.id;
  let value = task.textContent;//入力したtextがはいっている
  
  //画面から削除
  task.remove();


  
  //配列から削除
  if(id === 'not-yet'){
    //indexOfで配列の番号を取得してsplice(〇〇,1)で一つだけデータ削除
    data.task.splice(data.task.indexOf(value), 1);
  }else{
    data.done.splice(data.done.indexOf(value), 1);
   }
   //ローカルストレージのアップデート
  dataObjectUpdated();

  
}


function doneTask(){
  let task=this.parentNode.parentNode;
  let id = task.parentNode.id;
  if(id !== 'not-yet'){ //===doneと同じだよ
    return;//戻り値：ここで処理は終了
  }
  //通ったら
  let value= task.textContent;
  // 完了一覧に追加するコード
  let target= document.getElementById('done');
　//入れる順序を指定する
  target.insertBefore(task, target.childNodes[0]);
  //配列更新
  data.task.splice(data.task.indexOf(value),1);
  data.done.push(value);//タスクに入っていたdata配列の値をdaneに入れた

  //ローカルストレージの内容を更新
  dataObjectUpdated();

}


// ローカルストレージのデータをアップデートするためのコード
function dataObjectUpdated(){
  localStorage.setItem('todoList',JSON.stringify(data));
  console.log(localStorage);
}


// ローカルストレージの内容を表示させる為のコード
function renderTodoList(){
  // 未完了タスクを一覧で表示
  for(let value of data.task){
    addTaskToDOM(value);
  }


  // 完了タスクを一覧で表示
  for(let value of data.done){
    addTaskToDOM(value,true);
  }

  
}
//for 変数 of 配列
// 「配列」の値を1つずつ「変数」へ代入してくれる


// タスクを入力した日付もliに表示して保存されるようにする






