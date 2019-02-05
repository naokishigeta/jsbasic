// 格納用の配列
let data={
  task:[],
  done:[]
}

//アイコンをここに用意します
let removeIcon='<i class="fas fa-trash-alt fa-lg"></i>';
let doneIcon='<i class="fas fa-check-circle fa-lg"></i>';



//addボタン押した時の動作
document.getElementById('add').addEventListener('click',function(){
  let value=document.getElementById('task').value;
    // console.log('value');値が入っているか確認する
    addTask(value);
    console.log(data.task);
  })

//ーーーーーーーーーーーーー関数ーーーーーーーーーーーーー
//タスクをデータに格納
function addTask(value){//上のaddTaskを関数で定義する

  //データ(valueの中身)を配列に格納
  data.task.push(value);
  addTaskToDOM(value);//下のaddTaskToDOMを呼び出す
}

//画面に登録したいタスクを表示するための関数
function addTaskToDOM(text, isDone){
  // console.log(data.task);

  //doneタスクか、not-yetタスクか、判定させる
  let list;
  if(isDone){
    list=document.getElementById('done');
  }else{
    list=document.getElementById('not-yet');
  }

  // liタグを作成

  //変数taskにliタグを作成して挿入
  let task=document.createElement('li');
  //liタグのテキストに引数textを挿入
  task.textContent=text;
  console.log(task);

  //divタグを作成
  let buttons=document.createElement('div');
  // buttons.className='buttons';
  buttons.classList.add('buttons');

  //ボタンを追加
  //削除ボタン
  let remove=document.createElement('button');
  // 後から書くよ
  remove.classList.add('remove');

  //htmlに追加
  remove.innerHTML=removeIcon;

  //押された時の処理
  remove.addEventListener('click', removeTask);


  //完了ボタン
  let done=document.createElement('button');
//htmlに追加
  done.innerHTML=doneIcon;
  done.classList.add('done');

  //DOMの組み立て
buttons.appendChild(remove);
buttons.appendChild(done);
task.appendChild(buttons);

  //組み立てたDOMを導入
  list.insertBefore(task,list.childNodes[0]);

}

function removeTask(){
  let task=this.parentNode.parentNode;
  let id=task.parentNode.id;
  let value= task.textContent;

  // 画面から削除
  task.remove();

  // 配列から削除
  if(id==='not-yet'){
    data.task.splice(data.task.indexOf(value), 1);
  }else{
    data.task.splice(data.done.indexOf(value), 1);
  }
}

function doneTask(){

}











